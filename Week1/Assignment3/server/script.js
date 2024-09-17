document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';

                // const productId = document.createElement('div');
                // productId.textContent = `ID: ${product.id}`;
                // productId.className = 'product-id';

                const productName = document.createElement('div');
                productName.textContent = product.name;
                productName.className = 'product-name';

                const productDescription = document.createElement('div');
                productDescription.textContent = product.description;
                productDescription.className = 'product-description';

                const productPrice = document.createElement('div');
                productPrice.textContent = `$${product.price}`;
                productPrice.className = 'product-price';

                const productCategory = document.createElement('div');
                productCategory.textContent = `Category: ${product.category}`;
                productCategory.className = 'product-category';

                const productStock = document.createElement('div');
                productStock.textContent = `Stock: ${product.stock}`;
                productStock.className = 'product-stock';

                // productDiv.appendChild(productId);
                productDiv.appendChild(productName);
                productDiv.appendChild(productDescription);
                productDiv.appendChild(productPrice);
                productDiv.appendChild(productCategory);
                productDiv.appendChild(productStock);

                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});