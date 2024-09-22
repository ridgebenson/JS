const addedDataJSON = [];

const addProducts = async () => {
    try {
        const response = await fetch('http://localhost:3000/events');
        const data = await response.json();
        addedDataJSON.push(...data);
        console.log(addedDataJSON);
        populateProducts();
    } catch (error) {
        console.error(error.message);
    }
}

addProducts();

const populateProducts = () => {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';

    addedDataJSON.forEach((event, index) => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('product');

        const eventImg = document.createElement('img');
        eventImg.src = event.imageUrl;
        eventImg.className = 'product-image';

        const eventTitle = document.createElement('h2');
        eventTitle.innerText = event.title;

        const eventPrice = document.createElement('p');
        eventPrice.innerText = `Price $${event.price}`;

        const eventDate = document.createElement('p');
        eventDate.innerText = `Date: ${event.date}`;

        const eventLocation = document.createElement('p');
        eventLocation.innerText = `Location: ${event.location}`;

        const eventCompany = document.createElement('p');
        eventCompany.innerText = `Organizer: ${event.company}`;

        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to Cart';
        addToCartBtn.addEventListener('click', () => addToCart(event.id)); // Pass the product ID

        eventCard.append(eventImg, eventTitle, eventPrice, eventDate, eventLocation, eventCompany, addToCartBtn);
        productContainer.appendChild(eventCard);
    });
};

// Add to cart functionality with quantity
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage

const addToCart = (productId) => {
    const selectedProduct = addedDataJSON.find(p => p.id === productId); // Find product by ID
    if (!selectedProduct) return;

    const cartItem = cart.find((item) => item.id === selectedProduct.id);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...selectedProduct, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
    updateCartUI();
};

// Delete from cart functionality
const deleteFromCart = (productId) => {
    cart = cart.filter((item) => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
};

// Increase quantity functionality
const increaseQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    cartItem.quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
};

// Decrease quantity functionality
const decreaseQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
};

// Edit product in cart functionality
const editProductInCart = (productId, newQuantity) => {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        if (cartItem.quantity <= 0) {
            deleteFromCart(productId);
        }
    } else {
        alert("Product not found in cart");
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}



// Update cart UI
const updateCartUI = () => {
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = '';

    cart.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const itemName = document.createElement('h3');
        itemName.innerText = item.title;

        const itemQuantity = document.createElement('p');
        itemQuantity.innerText = `Quantity: ${item.quantity}`;

        const increaseBtn = document.createElement('button');
        increaseBtn.innerText = '+';
        increaseBtn.addEventListener('click', () => increaseQuantity(item.id));

        const decreaseBtn = document.createElement('button');
        decreaseBtn.innerText = '-';
        decreaseBtn.addEventListener('click', () => decreaseQuantity(item.id));

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Remove from cart';
        deleteBtn.addEventListener('click', () => deleteFromCart(item.id));

        cartItem.append(itemName, itemQuantity, increaseBtn, decreaseBtn, deleteBtn);

        cartContainer.appendChild(cartItem);
    });

    updateCartTotal(); // Update the cart total whenever the cart UI is updated
}

// Update cart total
const updateCartTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalContainer = document.getElementById('cartTotal');
    totalContainer.innerText = `Total: $${total}`;
};

// Initial call to update the cart UI and total on page load
updateCartUI();