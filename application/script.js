
const products = [
    { name: "Fresh Apples", price: 120, icon: "🍎" },
    { name: "Bananas", price: 50, icon: "🍌" },
    { name: "Fresh Carrots", price: 60, icon: "🥕" },
    { name: "Tomatoes", price: 40, icon: "🍅" },
    { name: "Broccoli", price: 80, icon: "🥦" },
    { name: "Fresh Milk", price: 30, icon: "🥛" }
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById("product-list");

    productList.innerHTML = products.map((product, index) => `
        <div class="product-card">
            <div class="product-icon">${product.icon}</div>
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${index})">
                Add to cart
            </button>
        </div>
    `).join("");
}

function addToCart(index) {
    cart.push(products[index]);
    document.getElementById("cart-count").textContent = cart.length;
    alert(products[index].name + " added to cart!");
}

function showCart() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const items = cart.map(item =>
        `${item.name} - ₹${item.price}`
    ).join("\n");

    const placeOrder = confirm(
        "YOUR CART\n\n" + items +
        "\n\nTotal: ₹" + total +
        "\n\nPlace this demo order?"
    );

    if (placeOrder) {
        alert("Demo order placed successfully!");
        cart = [];
        document.getElementById("cart-count").textContent = 0;
    }
}

displayProducts();
