

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

/* ADD TO CART */
function addToCart(name, price) {
cart.push({ name, price });
localStorage.setItem("cart", JSON.stringify(cart));
alert(name + " added to cart 🛒");
}

/* ADD TO WISHLIST */
function addToWishlist(name) {
wishlist.push(name);
localStorage.setItem("wishlist", JSON.stringify(wishlist));
alert(name + " added to wishlist ❤️");
}

/* SEARCH FUNCTION */
function searchProduct() {
let input = document.getElementById("searchInput").value.toLowerCase();
let products = document.getElementsByClassName("product");

for (let i = 0; i < products.length; i++) {
let title = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

if (title.includes(input)) {
products[i].style.display = "block";
} else {
products[i].style.display = "none";
}
}
}
