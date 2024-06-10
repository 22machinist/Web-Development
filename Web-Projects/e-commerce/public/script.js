document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const cartContainer = document.getElementById('cart-container');
    const checkoutButton = document.getElementById('checkout-button');
    let cart = [];

    function loadProducts() {
        fetch('http://localhost:3000/api/products')
            .then(response => response.json())
            .then(products => {
                productsContainer.innerHTML = '';
                products.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.classList.add('product');
                    productElement.innerHTML = `
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p>$${product.price}</p>
                        <button onclick="addToCart('${product._id}')">Add to Cart</button>
                    `;
                    productsContainer.appendChild(productElement);
                });
            });
    }

    window.addToCart = (productId) => {
        fetch(`http://localhost:3000/api/products/${productId}`)
            .then(response => response.json())
            .then(product => {
                const cartItem = cart.find(item => item._id === product._id);
                if (cartItem) {
                    cartItem.quantity += 1;
                } else {
                    cart.push({ ...product, quantity: 1 });
                }
                updateCart();
            });
    };

    function updateCart() {
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: $${item.quantity * item.price}</p>
                <button onclick="removeFromCart('${item._id}')">Remove</button>
            `;
            cartContainer.appendChild(cartItemElement);
        });
    }

    window.removeFromCart = (productId) => {
        const cartItemIndex = cart.findIndex(item => item._id === productId);
        if (cartItemIndex > -1) {
            cart.splice(cartItemIndex, 1);
        }
        updateCart();
    };

    checkoutButton.addEventListener('click', () => {
        alert('Checkout - Total: $' + cart.reduce((total, item) => total + (item.quantity * item.price), 0));
        cart = [];
        updateCart();
    });

    loadProducts();
});
