let cart = 0;
let wishlist = 0;

function addToCart(){
cart++;
document.getElementById("cart-count").innerText = cart;
}

function addToWishlist(){
wishlist++;
document.getElementById("wish-count").innerText = wishlist;
}
