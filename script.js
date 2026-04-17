
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToCart(name,price){

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}

function addToWishlist(name){

wishlist.push(name)

localStorage.setItem("wishlist",JSON.stringify(wishlist))

alert("Added to wishlist")

}

function displayCart(){

let cartItems = document.getElementById("cart-items")

if(!cartItems) return;

cartItems.innerHTML = ""

cart.forEach(item=>{
cartItems.innerHTML += `
<p>${item.name} - ₹${item.price}</p>
`
})

}

function displayWishlist(){

let wishlistItems = document.getElementById("wishlist-items")

if(!wishlistItems) return;

wishlistItems.innerHTML = ""

wishlist.forEach(item=>{
wishlistItems.innerHTML += `
<p>${item}</p>
`
})

}

function goToPayment(){
window.location.href="payment.html"
}

displayCart()
displayWishlist()
