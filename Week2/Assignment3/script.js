document.addEventListener('DOMContentLoaded', () => {
    const events = document.getElementById('container');
    const sortByDateRecent = document.getElementById('datE');
    const sortByDateOldest = document.getElementById('date');
    const sortByPriceHigh = document.getElementById('pricE');
    const sortByPriceLow = document.getElementById('price');
    const sortByLocationAsc = document.getElementById('locatioN');
    const sortByLocationDesc = document.getElementById('location');

    let eventData = [];

    const renderEvents = (data) => {
        events.innerHTML = '';
        data.map(event => {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event';

            const img = document.createElement('img');
            img.src = event.imageUrl;
            img.className = 'event-image';

            const eventTitle = document.createElement('h2');
            eventTitle.textContent = event.title;

            const eventPrice = document.createElement('p');
            eventPrice.textContent = `$${event.price}`;

            const eventDate = document.createElement('p');
            eventDate.textContent = event.date;

            const eventLocation = document.createElement('p');
            eventLocation.textContent = event.location;

            const eventCompany = document.createElement('p');
            eventCompany.textContent = event.company;

            const buyEvent = document.createElement('button');
            buyEvent.textContent = 'Buy Ticket';
            buyEvent.className = 'buy-button';

            events.appendChild(eventDiv);
            eventDiv.append(img);
            eventDiv.append(eventTitle);
            eventDiv.append(eventPrice);
            eventDiv.append(eventDate);
            eventDiv.append(eventDate);
            eventDiv.append(eventLocation);
            eventDiv.append(eventCompany);
            eventDiv.append(buyEvent);
        });
    };

    const sortByDate = (data, order = 'recent') => {
        return data.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return order === 'recent' ? dateB - dateA : dateA - dateB;
        });
    };

    const sortByPrice = (data, order = 'high') => {
        return data.sort((a, b) => {
            return order === 'high' ? b.price - a.price : a.price - b.price;
        });
    };

    const sortByLocation = (data, order = 'asc') => {
        return data.sort((a, b) => {
            if (order === 'asc') {
                return a.location.localeCompare(b.location);
            } else {
                return b.location.localeCompare(a.location);
            }
        });
    };

    try {
        fetch('../data.json')
            .then(response => response.json())
            .then(data => {
                eventData = data;
                renderEvents(eventData);
            })
            .catch(error => console.error('Error fetching data:', error));
    } catch (error) {
        console.error('Error:', error);
    }

    sortByDateRecent.addEventListener('click', () => {
        const sortedData = sortByDate(eventData, 'recent');
        renderEvents(sortedData);
    });

    sortByDateOldest.addEventListener('click', () => {
        const sortedData = sortByDate(eventData, 'oldest');
        renderEvents(sortedData);
    });

    sortByPriceHigh.addEventListener('click', () => {
        const sortedData = sortByPrice(eventData, 'high');
        renderEvents(sortedData);
    });

    sortByPriceLow.addEventListener('click', () => {
        const sortedData = sortByPrice(eventData, 'low');
        renderEvents(sortedData);
    });

    sortByLocationAsc.addEventListener('click', () => {
        const sortedData = sortByLocation(eventData, 'asc');
        renderEvents(sortedData);
    });

    sortByLocationDesc.addEventListener('click', () => {
        const sortedData = sortByLocation(eventData, 'desc');
        renderEvents(sortedData);
    });
});