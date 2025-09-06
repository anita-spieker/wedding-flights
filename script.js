const API_URL = 'https://api.jsonbin.io/v3/b/68936701f7e7a370d1f56181';
const API_KEY = '$2a$10$K6IZ0IqxTQRifQ0AReUfguS8dmpTeeD6ACTVl036JFGJPZVzy3bwq';

let jsonData = [];

async function loadFlights() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'x-master-key': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        jsonData = data.record; // JSONBin nests your data under 'record'

        const initiallySortedFlights = sortFlights(jsonData, 'arrival');
        renderFlights(initiallySortedFlights);
    } catch (error) {
        console.error('Failed to fetch flight data:', error);
    }
}

function parseDateTime(dateStr, timeStr) {
    const [day, month, year] = dateStr.split('/').map(num => parseInt(num, 10));
    const [hours, minutes] = timeStr.split(':').map(num => parseInt(num, 10));


    return new Date(2000 + year, month - 1, day, hours, minutes);
}

function getEarliestDeparture(flight) {
    return flight.departures.reduce((earliest, current) => {
        const currentDate = parseDateTime(current.departure_date, current.departure_time);
        if (!earliest) return currentDate;
        return currentDate < earliest ? currentDate : earliest;
    }, null);
}

function getLatestArrival(flight) {
    return flight.arrivals.reduce((latest, current) => {
        const currentDate = parseDateTime(current.arrival_date, current.arrival_time);
        if (!latest) return currentDate;
        return currentDate > latest ? currentDate : latest;
    }, null);
}

function stripTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getEarliestDepartureDay(flight) {
    const earliestDeparture = getEarliestDeparture(flight);
    return earliestDeparture ? stripTime(earliestDeparture) : null;
}

function getLatestArrivalDay(flight) {
    const latestArrival = getLatestArrival(flight);
    return latestArrival ? stripTime(latestArrival) : null;
}

function sortFlights(flights, sortBy) {
    return flights.sort((a, b) => {
        let dateA = null, dateB = null;

        if (sortBy === 'arrival') {
            dateA = getLatestArrival(a);
            dateB = getLatestArrival(b);
        } else if (sortBy === 'departure') {
            dateA = getEarliestDeparture(a);
            dateB = getEarliestDeparture(b);
        } else if (sortBy === 'arrival-day') {
            dateA = getLatestArrivalDay(a);
            dateB = getLatestArrivalDay(b);
        } else if (sortBy === 'departure-day') {
            dateA = getEarliestDepartureDay(a);
            dateB = getEarliestDepartureDay(b);
        }

        if (dateA && dateB) {
            return dateA - dateB;
        }

        return 0;
    });
}


function renderFlights(flights) {
    const container = document.getElementById('flight-container');
    container.innerHTML = '';

    flights.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.classList.add('card', 'mb-3');


        const title = document.createElement('div');
        title.classList.add('card-header');
        title.innerText = flight.people.join(', ');

        flightCard.appendChild(title);


        const flightsContent = document.createElement('div');
        flightsContent.classList.add('arrivals-departures', 'd-flex', 'gap-3');


        const arrivalsDiv = document.createElement('div');
        arrivalsDiv.classList.add('arrivals', 'flex-grow-1');
        flight.arrivals.forEach(arrival => {
            const arrivalCard = document.createElement('div');
            arrivalCard.classList.add('card');
            const arrivalHeader = document.createElement('div');
            arrivalHeader.classList.add('card-header');
            arrivalHeader.innerText = `${arrival.departure} - ${arrival.arrival} ( ${arrival.flight_number} )`;
            arrivalCard.appendChild(arrivalHeader);

            const arrivalDetails = document.createElement('div');
            arrivalDetails.classList.add('flight-details');
            arrivalDetails.innerHTML = `
                <p><strong>Departure:</strong> ${arrival.departure} ( ${arrival.departure_time} ${arrival.departure_date} )</p>
                <p><strong>Arrival:</strong> ${arrival.arrival} ( ${arrival.arrival_time} ${arrival.arrival_date} )</p>
            `;
            arrivalCard.appendChild(arrivalDetails);
            arrivalsDiv.appendChild(arrivalCard);
        });


        const departuresDiv = document.createElement('div');
        departuresDiv.classList.add('departures', 'flex-grow-1');
        flight.departures.forEach(departure => {
            const departureCard = document.createElement('div');
            departureCard.classList.add('card');
            const departureHeader = document.createElement('div');
            departureHeader.classList.add('card-header');
            departureHeader.innerText = `${departure.departure} - ${departure.arrival} ( ${departure.flight_number} )`;
            departureCard.appendChild(departureHeader);

            const departureDetails = document.createElement('div');
            departureDetails.classList.add('flight-details');
            departureDetails.innerHTML = `
                <p><strong>Departure:</strong> ${departure.departure} ( ${departure.departure_time} ${departure.departure_date} )</p>
                <p><strong>Arrival:</strong> ${departure.arrival} ( ${departure.arrival_time} ${departure.arrival_date} )</p>
            `;
            departureCard.appendChild(departureDetails);
            departuresDiv.appendChild(departureCard);
        });


        flightsContent.appendChild(arrivalsDiv);
        flightsContent.appendChild(departuresDiv);

        flightCard.appendChild(flightsContent);
        container.appendChild(flightCard);
    });
}





function filterFlights(flights, searchQuery) {
    return flights.filter(flight => flight.people.some(person => person.toLowerCase().includes(searchQuery.toLowerCase())));
}


document.getElementById('sort-by').addEventListener('change', (event) => {
    const sortBy = event.target.value;
    const sortedFlights = sortFlights(jsonData, sortBy);
    renderFlights(sortedFlights);
});


document.getElementById('search').addEventListener('input', (event) => {
    const searchQuery = event.target.value;
    const filteredFlights = filterFlights(jsonData, searchQuery);
    renderFlights(filteredFlights);
});



loadFlights();
