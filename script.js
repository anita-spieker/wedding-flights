// JSON data for testing (replace this with actual fetch logic in a live environment)
const jsonData = [
    {
        "id": "9ee42cb0-c1eb-430b-a78b-b7d736d2ff7c",
        "people": [
            "Stephanie",
            "Nick",
            "Clement"
        ],
        "arrivals": [
            {
                "airline": "Air Canada",
                "flight_number": "AC096",
                "departure_date": "23/09/25",
                "arrival_date": "24/09/25",
                "departure": "YUL",
                "departure_time": "22:45",
                "arrival": "GRU",
                "arrival_time": "9:45"
            }
        ],
        "departures": [
            {
                "airline": "Air Canada",
                "flight_number": "AC097",
                "departure_date": "02/10/02",
                "arrival_date": "03/10/02",
                "departure": "GRU",
                "departure_time": "21:00",
                "arrival": "YUL",
                "arrival_time": "6:10"
            }
        ]
    },
    {
        "id": "b1f2c3d4-e5f6-7890-abcd-ef1234567890",
        "people": [
            "Joel",
            "Sonya"
        ],
        "arrivals": [
            {
                "airline": "Latam",
                "flight_number": "LA3367",
                "departure_date": "19/09/25",
                "arrival_date": "19/09/25",
                "departure": "GIG",
                "departure_time": "10:20",
                "arrival": "GRU",
                "arrival_time": "11:25"
            }
        ],
        "departures": [
            {
                "airline": "Latam",
                "flight_number": "LA8096",
                "departure_date": "29/09/02",
                "arrival_date": "29/09/02",
                "departure": "GRU",
                "departure_time": "16:10",
                "arrival": "SCL",
                "arrival_time": "20:00"
            }
        ]
    },
    {
        "id": "c2d3e4f5-g6h7-8901-2345-678901234567",
        "people": [
            "Franz",
            "Janessa",
            "Azarae"
        ],
        "arrivals": [
            {
                "airline": "Avianca",
                "flight_number": "AV201",
                "departure_date": "21/09/25",
                "arrival_date": "22/09/25",
                "departure_time": "23:25",
                "departure": "YUL",
                "arrival": "BOG",
                "arrival_time": "4:45"
            },
            {
                "airline": "Avianca",
                "flight_number": "AV185",
                "departure_date": "22/09/25",
                "arrival_date": "22/09/25",
                "departure_time": "7:15",
                "departure": "BOG",
                "arrival": "GRU",
                "arrival_time": "15:20"
            }
        ],
        "departures": [
            {
                "airline": "Avianca",
                "flight_number": "AV86",
                "departure_date": "29/09/25",
                "arrival_date": "29/09/25",
                "departure": "GRU",
                "departure_time": "07:20",
                "arrival": "BOG",
                "arrival_time": "11:20"
            },
            {
                "airline": "Avianca",
                "flight_number": "AV200",
                "departure_date": "29/09/25",
                "arrival_date": "29/09/25",
                "departure_time": "14:25",
                "departure": "BOG",
                "arrival": "YUL",
                "arrival_time": "22:05"
            }
        ]
    },
    {
        "id": "c2d3e4f5-g6h7-8901-2345-678901234568",
        "people": [
            "Fritz"
        ],
        "arrivals": [
            {
                "airline": "Avianca",
                "flight_number": "AV201",
                "departure_date": "21/09/25",
                "arrival_date": "22/09/25",
                "departure_time": "23:25",
                "departure": "YUL",
                "arrival": "BOG",
                "arrival_time": "4:45"
            },
            {
                "airline": "Avianca",
                "flight_number": "AV185",
                "departure_date": "22/09/25",
                "arrival_date": "22/09/25",
                "departure_time": "7:15",
                "departure": "BOG",
                "arrival": "GRU",
                "arrival_time": "15:20"
            }
        ],
        "departures": []
    },
    {
        "id": "c2d3e4f5-g6h7-8901-2345-678901234569",
        "people": [
            "Faith"
        ],
        "arrivals": [
            {
                "airline": "Arajet",
                "flight_number": "DM5861",
                "departure_date": "20/09/25",
                "arrival_date": "20/09/25",
                "departure_time": "11:40",
                "departure": "YYZ",
                "arrival": "PUJ",
                "arrival_time": "16:47"
            },
            {
                "airline": "Arajet",
                "flight_number": "DM6086",
                "departure_date": "20/09/25",
                "arrival_date": "21/09/25",
                "departure_time": "18:03",
                "departure": "PUJ",
                "arrival": "GRU",
                "arrival_time": "02:15"
            }
        ],
        "departures": [
            {
                "airline": "Arajet",
                "flight_number": "DM6023",
                "departure_date": "29/09/25",
                "arrival_date": "30/09/25",
                "departure_time": "20:55",
                "departure": "GRU",
                "arrival": "PUJ",
                "arrival_time": "03:05"
            },
            {
                "airline": "Arajet",
                "flight_number": "DM5802",
                "departure_date": "30/09/25",
                "arrival_date": "30/09/25",
                "departure_time": "06:10",
                "departure": "PUJ",
                "arrival": "YYZ",
                "arrival_time": "10:40"
            }
        ]
    },
    {
        "id": "c2d3e4f5-g6h7-8901-2345-678901234570",
        "people": [
            "Lucas",
            "Maria"
        ],
        "arrivals": [
            {
                "airline": "KLM",
                "flight_number": "KL0791",
                "departure_date": "23/09/25",
                "arrival_date": "23/09/25",
                "departure_time": "12:50",
                "departure": "AMS",
                "arrival": "GRU",
                "arrival_time": "19:50"
            }
        ],
        "departures": [
            {
                "airline": "KLM",
                "flight_number": "KL0792",
                "departure_date": "17/10/25",
                "arrival_date": "18/10/25",
                "departure_time": "21:45",
                "departure": "GRU",
                "arrival": "AMS",
                "arrival_time": "14:20"
            }
        ]
    },
    {
        "id": "c2d3e4f5-g6h7-8901-2345-678901234571",
        "people": [
            "Thomas",
            "Vivian",
            "Serena"
        ],
        "arrivals": [
            {
                "airline": "KLM",
                "flight_number": "KL1928",
                "departure_date": "18/09/25",
                "arrival_date": "18/09/25",
                "departure_time": "7:15",
                "departure": "GVA",
                "arrival": "AMS",
                "arrival_time": "8:55"
            },
            {
                "airline": "KLM",
                "flight_number": "KL791",
                "departure_date": "18/09/25",
                "arrival_date": "18/09/25",
                "departure_time": "12:50",
                "departure": "AMS",
                "arrival": "GRU",
                "arrival_time": "19:50"
            }
        ],
        "departures": [
            {
                "airline": "KLM",
                "flight_number": "KL792",
                "departure_date": "07/10/25",
                "arrival_date": "08/10/25",
                "departure_time": "21:45",
                "departure": "GRU",
                "arrival": "AMS",
                "arrival_time": "14:20"
            },
            {
                "airline": "KLM",
                "flight_number": "KL1937",
                "departure_date": "08/10/25",
                "arrival_date": "08/10/25",
                "departure_time": "17:05",
                "departure": "AMS",
                "arrival": "GVA",
                "arrival_time": "18:35"
            }
        ]
    },
    {
        "id": "c2d3e4f5-g6h7-8901-2345-678901234572",
        "people": [
            "Paulo",
            "Charlotte",
            "Noali",
            "James",
            "Eliah"
        ],
        "arrivals": [
            {
                "airline": "KLM",
                "flight_number": "KL791",
                "departure_date": "16/09/25",
                "arrival_date": "16/09/25",
                "departure_time": "12:50",
                "departure": "AMS",
                "arrival": "GRU",
                "arrival_time": "19:50"
            }
        ],
        "departures": [
            {
                "airline": "KLM",
                "flight_number": "KL792",
                "departure_date": "05/10/25",
                "arrival_date": "06/10/25",
                "departure_time": "21:45",
                "departure": "GRU",
                "arrival": "AMS",
                "arrival_time": "14:20"
            }
        ]
    },
    {
        "id": "c2d3e4f5-g6h7-8901-2345-678901234573",
        "people": [
            "Finn",
            "Lydia"
        ],
        "arrivals": [],
        "departures": []
    },
    {
        "id": "c2d3e4f5-g6h7-8901-2345-678901234578",
        "people": [
            "Susanna",
            "Freddie"
        ],
        "arrivals": [
            {
                "airline": "Avianca",
                "flight_number": "AV8383",
                "departure_date": "22/09/25",
                "arrival_date": "22/09/25",
                "departure_time": "11:00",
                "departure": "PTY",
                "destination": "BOG",
                "arrival_time": "12:35"
            },
            {
                "airline": "Avianca",
                "flight_number": "AV249",
                "departure_date": "22/09/25",
                "arrival_date": "23/09/25",
                "departure_time": "16:35",
                "departure": "BOG",
                "destination": "GRU",
                "arrival_time": "00:40"
            }
        ],
        "departures": []
    }
];

// Function to parse the date and time into a full Date object
function parseDateTime(dateStr, timeStr) {
    const [day, month, year] = dateStr.split('/').map(num => parseInt(num, 10));
    const [hours, minutes] = timeStr.split(':').map(num => parseInt(num, 10));

    // Note: JavaScript months are 0-indexed, so subtract 1 from the month
    return new Date(2000 + year, month - 1, day, hours, minutes);  // Assume 2000 for the century (dates like "23/09/25" should work)
}

// Function to sort flights by arrival or departure time
function sortFlights(flights, sortBy) {
    return flights.sort((a, b) => {
        // Get the relevant date and time based on the sortBy parameter
        let dateA, dateB;
        
        if (sortBy === 'arrival' && a.arrivals.length > 0 && b.arrivals.length > 0) {
            dateA = parseDateTime(a.arrivals[0].arrival_date, a.arrivals[0].arrival_time);
            dateB = parseDateTime(b.arrivals[0].arrival_date, b.arrivals[0].arrival_time);
        } else if (sortBy === 'departure' && a.departures.length > 0 && b.departures.length > 0) {
            dateA = parseDateTime(a.departures[0].departure_date, a.departures[0].departure_time);
            dateB = parseDateTime(b.departures[0].departure_date, b.departures[0].departure_time);
        }

        if (dateA && dateB) {
            return dateA - dateB;  // Compare the Date objects
        }

        return 0;  // In case of no valid times to compare, keep the current order
    });
}



// Function to render flights
function renderFlights(flights) {
    const container = document.getElementById('flight-container');
    container.innerHTML = ''; // Clear previous content

    flights.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.classList.add('card', 'mb-3');
        
        // Flight title is the people
        const title = document.createElement('div');
        title.classList.add('card-header');
        title.innerText = flight.people.join(', ');

        flightCard.appendChild(title);

        // Flights grouping (arrivals and departures)
        const flightsContent = document.createElement('div');
        flightsContent.classList.add('arrivals-departures', 'd-flex', 'gap-3');

        // Arrivals section
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

        // Departures section
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

        // Append arrivals and departures to the flight card
        flightsContent.appendChild(arrivalsDiv);
        flightsContent.appendChild(departuresDiv);

        flightCard.appendChild(flightsContent);
        container.appendChild(flightCard);
    });
}




// Function to filter flights by search query
function filterFlights(flights, searchQuery) {
    return flights.filter(flight => flight.people.some(person => person.toLowerCase().includes(searchQuery.toLowerCase())));
}

// Event listener for sorting
document.getElementById('sort-by').addEventListener('change', (event) => {
    const sortBy = event.target.value;
    const sortedFlights = sortFlights(jsonData, sortBy);
    renderFlights(sortedFlights); // Call renderFlights after sorting
});

// Event listener for search
document.getElementById('search').addEventListener('input', (event) => {
    const searchQuery = event.target.value;
    const filteredFlights = filterFlights(jsonData, searchQuery);
    renderFlights(filteredFlights);
});

// Initial render
const initiallySortedFlights = sortFlights(jsonData, 'arrival');
renderFlights(initiallySortedFlights);
