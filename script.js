const products = [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 20.00 },
    { id: 3, name: 'Product 3', price: 30.00 }
];

const cart = [];

function loadProducts() {
    const productContainer = document.querySelector('.products');
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartContainer = document.querySelector('.cart-items');
    if (cartContainer) {
        cartContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });
        const cartTotal = document.getElementById('cart-total');
        if (cartTotal) {
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            cartTotal.textContent = total.toFixed(2);
        }
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCart();
});
