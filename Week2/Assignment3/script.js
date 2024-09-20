document.addEventListener('DOMContentLoaded', () => {
    const events = document.getElementById('container');

    
    try {
        
        fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            data.map(event => {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event';

                const img = document.createElement('img');
                img.src = event.imageUrl;
                img.className = 'event-image';

                const eventTitle = document.createElement('h2');
                eventTitle.textContent = event.title;

                const eventPrice = document.createElement('p');
                eventPrice.textContent = event.price;

                const eventDate = document.createElement('p');
                eventDate.textContent = event.date;

                const eventLocation = document.createElement('p');
                eventLocation.textContent = event.location;

                const eventCompany = document.createElement('p');
                eventCompany.textContent=event.company;

                const buyEvent = document.createElement('button');
                buyEvent.textContent = 'Buy Now';
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
        });

    } catch (error) {
        
    }

    const filterByDateRecent = document.getElementById('datE');
    const filterByDateoldest = document.getElementById('date');
    const filterByPriceHigh = document.getElementById('pricE');
    const filterByPriceLow = document.getElementById('price');
    const filterByLocationAsc = document.getElementById('locatioN');
    const filterByLocationDesc = document.getElementById('location');
    
    const faVourites = document.getElementById('favE');

    filterByDateRecent.addEventListener('click', () => {
        events.innerHTML = '';
        fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => new Date(a.date) - new Date(b.date));
            data.map(event => {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event';

                const img = document.createElement('img');
                img.src = event.imageUrl;
                img.className = 'event-image';

                const eventTitle = document.createElement('h2');
                eventTitle.textContent = event.title;

                const eventPrice = document.createElement('p');
                eventPrice.textContent = event.price;

                const eventDate = document.createElement('p');
                eventDate.textContent = event.date;

                const eventLocation = document.createElement('p');
                eventLocation.textContent = event.location;

                const eventCompany = document.createElement('p');
                eventCompany.textContent=event.company;

                const buyEvent = document.createElement('button');
                buyEvent.textContent = 'Buy Now';
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
        });
    });

    filterByDateoldest.addEventListener('click', () => {
        events.innerHTML = '';
        fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => new Date(b.date) - new Date(a.date));
            data.map(event => {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event';

                const img = document.createElement('img');
                img.src = event.imageUrl;
                img.className = 'event-image';

                const eventTitle = document.createElement('h2');
                eventTitle.textContent = event.title;

                const eventPrice = document.createElement('p');
                eventPrice.textContent = event.price;

                const eventDate = document.createElement('p');
                eventDate.textContent = event.date;

                const eventLocation = document.createElement('p');
                eventLocation.textContent = event.location;

                const eventCompany = document.createElement('p');
                eventCompany.textContent=event.company;

                const buyEvent = document.createElement('button');
                buyEvent.textContent = 'Buy Now';
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
        });
    });

    filterByLocationAsc.addEventListener('click', () => {
        events.innerHTML = '';
        fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => a.location.localeCompare(b.location));
            data.map(event => {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event';

                const img = document.createElement('img');
                img.src = event.imageUrl;
                img.className = 'event-image';

                const eventTitle = document.createElement('h2');
                eventTitle.textContent = event.title;

                const eventPrice = document.createElement('p');
                eventPrice.textContent = event.price;

                const eventDate = document.createElement('p');
                eventDate.textContent = event.date;

                const eventLocation = document.createElement('p');
                eventLocation.textContent = event.location;

                const eventCompany = document.createElement('p');
                eventCompany.textContent=event.company;

                const buyEvent = document.createElement('button');
                buyEvent.textContent = 'Buy Now';
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
        });
    });

    filterByLocationDesc.addEventListener('click', () => {
        events.innerHTML = '';
        fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => b.location.localeCompare(a.location));
            data.map(event => {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event';

                const img = document.createElement('img');
                img.src = event.imageUrl;
                img.className = 'event-image';

                const eventTitle = document.createElement('h2');
                eventTitle.textContent = event.title;

                const eventPrice = document.createElement('p');
                eventPrice.textContent = event.price;

                const eventDate = document.createElement('p');
                eventDate.textContent = event.date;

                const eventLocation = document.createElement('p');
                eventLocation.textContent = event.location;

                const eventCompany = document.createElement('p');
                eventCompany.textContent=event.company;

                const buyEvent = document.createElement('button');
                buyEvent.textContent = 'Buy Now';
                buyEvent.className = 'buy-button';

                const add2Fave = document.createElement('button');
                add2Fave.textContent = 'Add to Favourites';
                add2Fave.className = 'buy-button';

                events.appendChild(eventDiv);
                eventDiv.appendChild(img);
                eventDiv.appendChild(eventTitle);
                eventDiv.appendChild(eventPrice);
                eventDiv.appendChild(eventDate);
                eventDiv.appendChild(eventDate);
                eventDiv.appendChild(eventLocation);
                eventDiv.appendChild(eventCompany);
                eventDiv.appendChild(buyEvent);
                eventDiv.appendChild(add2Fave);
            });
        });
    });

    filterByPriceHigh.addEventListener('click', () => {
        events.innerHTML = '';
        fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => b.price - a.price);
            data.map(event => {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event';

                const img = document.createElement('img');
                img.src = event.imageUrl;
                img.className = 'event-image';

                const eventTitle = document.createElement('h2');
                eventTitle.textContent = event.title;

                const eventPrice = document.createElement('p');
                eventPrice.textContent = event.price;

                const eventDate = document.createElement('p');
                eventDate.textContent = event.date;

                const eventLocation = document.createElement('p');
                eventLocation.textContent = event.location;

                const eventCompany = document.createElement('p');
                eventCompany.textContent=event.company;

                const buyEvent = document.createElement('button');
                buyEvent.textContent = 'Buy Now';
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
        });
    });

    filterByPriceLow.addEventListener('click', () => {
        events.innerHTML = '';
        fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => a.price - b.price);
            data.map(event => {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event';

                const img = document.createElement('img');
                img.src = event.imageUrl;
                img.className = 'event-image';

                const eventTitle = document.createElement('h2');
                eventTitle.textContent = event.title;

                const eventPrice = document.createElement('p');
                eventPrice.textContent = event.price;

                const eventDate = document.createElement('p');
                eventDate.textContent = event.date;

                const eventLocation = document.createElement('p');
                eventLocation.textContent = event.location;

                const eventCompany = document.createElement('p');
                eventCompany.textContent=event.company;

                const buyEvent = document.createElement('button');
                buyEvent.textContent = 'Buy Now';
                buyEvent.className = 'buy-button';

                const add2Fave = document.createElement('button');
                add2Fave.textContent = 'Add to Favourites';
                add2Fave.className = 'buy-button';

                events.appendChild(eventDiv);
                eventDiv.append(img);
                eventDiv.append(eventTitle);
                eventDiv.append(eventPrice);
                eventDiv.append(eventDate);
                eventDiv.append(eventDate);
                eventDiv.append(eventLocation);
                eventDiv.append(eventCompany);
                eventDiv.append(buyEvent);
                eventDiv.append(add2Fave);
            });
        });
    });

});
