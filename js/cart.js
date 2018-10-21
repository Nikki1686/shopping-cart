/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // var cartTab = document.getElementsByTagName('tbody');
  // while (cartTab.firstChild) {
  //   cartTab.removeChild(cartTab.firstChild);
  // }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var cartTab = document.getElementById('cart');
  var tbody = cartTab.children[1];
  // TODO: Find the table body
  for (var i in cart.items) {
    var trEl = document.createElement('tr');
    var tdNameEl = document.createElement('td');
    tdNameEl.textContent = cart.items[i].product;
    trEl.appendChild(tdNameEl);
    var tdQEl = document.createElement('td');
    tdQEl.textContent = cart.items[i].quantity;
    trEl.appendChild(tdQEl);
    tbody.appendChild(trEl);
  }
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
