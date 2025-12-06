// Hamburger menu function 
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

// Feedback form function
function validateForm() { 
    var name = document.forms["myForm"]["name"].value; 
    var email = document.forms["myForm"]["email"].value;
    var feedback = document.forms["myForm"]["feedback"].value;
    
    if (name == "") { 
        alert("Name must be filled out."); 
        return false; 
    } 
    
    if (email == "") { 
        alert("Email must be filled out."); 
        return false; 
    } 

    if (feedback == "") {
        alert("Feedback must be filled out.");
        return false;
    }
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (!mybutton) return;

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Toggle floating mini-cart when menu bar scrolls out of view
window.addEventListener("scroll", function () {
    const miniCart = document.getElementById("mini-cart");
    const nav = document.getElementById("headerAndNavContainer");

    if (!miniCart || !nav) return;

    const navBottom = nav.getBoundingClientRect().bottom;

    if (navBottom <= 0) {
        // Navigation bar missing → Enable floating
        miniCart.classList.remove("normal-cart");
        miniCart.classList.add("floating-cart");
    } else {
        // Navigation bar is still in view → Maintain normal mode
        miniCart.classList.remove("floating-cart");
        miniCart.classList.add("normal-cart");
    }
});

// ---------- CART DATA IN sessionStorage ----------
// Read mini cart
function loadCart() {
    const json = sessionStorage.getItem("cartItems");
    if (!json) return {};
    try {
        return JSON.parse(json);
    } catch (e) {
        return {};
    }
}

// Save cart and update cartCount + mini cart display
function saveCart(cart) {
    sessionStorage.setItem("cartItems", JSON.stringify(cart));

    let count = 0;
    Object.values(cart).forEach(item => {
        count += item.qty;
    });

    sessionStorage.setItem("cartCount", String(count));

    const cartCountSpan = document.getElementById("cartCount");
    if (cartCountSpan) {
        cartCountSpan.textContent = count;
    }
}

// The number of items is displayed in the mini cart in the upper right corner when the page loads.
function initMiniCart() {
    const cart = loadCart();
    let count = 0;
    Object.values(cart).forEach(item => {
        count += item.qty;
    });

    const cartCountSpan = document.getElementById("cartCount");
    if (cartCountSpan) {
        cartCountSpan.textContent = count;
    }
}

// AddToCart: Add items to your shopping cart
function initAddToCartButtons() {
    document.querySelectorAll(".AddToCart").forEach(button => {
        button.addEventListener("click", () => {
            const id = button.dataset.id;
            if (!id) return; // If no data-id, ignore

            const name = button.dataset.name || "Item";
            const price = parseFloat(button.dataset.price || "0");
            const image = button.dataset.image || "";

            let cart = loadCart();

            if (cart[id]) {
                cart[id].qty += 1;
            } else {
                cart[id] = {
                    id,
                    name,
                    price,
                    image,
                    qty: 1
                };
            }

            saveCart(cart);
        });
    });
}

// Render the shopping cart table on the checkout page.
function renderCartTableIfPresent() {
    const cartBody = document.getElementById("cartBody");
    const checklist = document.getElementById("checklist");
    const emptyCartMsg = document.getElementById("empty-cart-message");
    const totalPriceSpan = document.getElementById("totalPrice");
    const checkoutButton = document.getElementById("checkoutButton");

    // If these elements do not exist, it means it's not a checkout page, and you don't need to do anything.
    if (!cartBody || !checklist || !emptyCartMsg || !totalPriceSpan) {
        return;
    }

    const cart = loadCart();
    const items = Object.values(cart);

    if (items.length === 0) {
        checklist.style.display = "none";
        emptyCartMsg.style.display = "block";
        totalPriceSpan.textContent = "$0.00";

        if (checkoutButton) {
            checkoutButton.style.display = "none";  // Hide Checkout button
        }

        return;
    }

    checklist.style.display = "block";
    emptyCartMsg.style.display = "none";

    if (checkoutButton) {
        checkoutButton.style.display = "block";  // Display Checkout button
    }

    // Clear tbody first
    cartBody.innerHTML = "";

    let total = 0;

    items.forEach(item => {
        const tr = document.createElement("tr");

        total += item.qty * item.price;

        tr.innerHTML = `
            <td>${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}</td>
            <td>${item.name}</td>
            <td class="item-qty">
                <div class="qty-wrapper">
                    <button class="qty-minus" data-id="${item.id}">-</button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-plus" data-id="${item.id}">+</button>
                </div>
            </td>
            <td class="item-price">$${item.price.toFixed(2)}</td>
            <td><button class="deleteItem" data-id="${item.id}">🗑</button></td>
        `;

        cartBody.appendChild(tr);
    });

    totalPriceSpan.textContent = "$" + total.toFixed(2);

    // Bind delete button
    document.querySelectorAll(".deleteItem").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            let cart = loadCart();
            if (cart[id]) {
                delete cart[id];
                saveCart(cart);
                renderCartTableIfPresent(); // Re-render after delete
            }
        });
    });

    // Bind quantity - button
    document.querySelectorAll(".qty-minus").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            let cart = loadCart();
            if (cart[id]) {
                cart[id].qty -= 1;
                if (cart[id].qty <= 0) {
                    // Remove the product if the price drops to 0 or below.
                    delete cart[id];
                }
                saveCart(cart);
                renderCartTableIfPresent(); // Re-render
            }
        });
    });

    // Bind quantity + button
    document.querySelectorAll(".qty-plus").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            let cart = loadCart();
            if (cart[id]) {
                cart[id].qty += 1;
                saveCart(cart);
                renderCartTableIfPresent(); // Re-render after adding and total price
            }
        });
    });
}

// Run initializations when DOM is ready
window.addEventListener("DOMContentLoaded", function(){
    initMiniCart();     // Show cart count in mini cart
    initAddToCartButtons();     // Wire up AddToCart buttons
    renderCartTableIfPresent();     // If on checkout page, render cart table
    
    const miniCart = document.getElementById("mini-cart");
    if (miniCart) {
        miniCart.style.cursor = "pointer";
        miniCart.addEventListener("click", () => {
            window.location.href = "checkout.html";
        });
    }

    // Auto-copy ALT to TITLE for all product images
    document.querySelectorAll("img").forEach(img => {
        if (img.alt && !img.title) {
            img.title = img.alt;
        }
    });
})