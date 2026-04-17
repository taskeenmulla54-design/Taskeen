let cart = 0;
let wishlist = 0;

function addToCart(){
cart++;
document.getElementById("cart-count").innerText = cart;
alert("Added to Cart");
}

function addToWishlist(){
wishlist++;
document.getElementById("wish-count").innerText = wishlist;
alert("Added to Wishlist");
}
