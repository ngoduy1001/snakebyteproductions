var email = ""
var content = ""
var emailEntered = false

function init() {
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready);
    }
    else {
        ready();
    }
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    console.log(email)
    if (email == "") {
        alert('Please enter your email so we could send you a quote.')
        return
    }
    // Only write email once
    if (emailEntered == false){
        content += 'Customer Email: ' + email + '<br>' + '<br>' //new line in email
        emailEntered = true
    }
    //alert('Thank you for your purchase')
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    var emptyCart = true
    for (var i = 0; i < cartRows.length; i++) {
        emptyCart = false
        var cartRow = cartRows[i]
        var titleElement = cartRow.getElementsByClassName('cart-item cart-column')[0].getElementsByClassName('cart-item-title')[0]
        var title = titleElement.innerText
        console.log('Item name: ' + title)
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        //total = total + (price * quantity)
        console.log('Item price: $' + price)
        console.log('Item quantity: ' + quantity)
        content += 'Item name: ' + title + '<br>'
        content += 'Item price: $' + price + '<br>'
        content += 'Item quantity: ' + quantity + '<br>' + '<br>'
    }
    console.log(content + "content")
    if (emptyCart == true) {
        alert('Please select the items you\'d like to purchase.')
        return
    }
    // This function send an email to the company about this customer's order
    Email.send({
        Host : "smtp25.elasticemail.com",
        Username : "duyngo1001@gmail.com",
        Password : "d0ff7019-a071-4022-9f0e-fbbd5e1722ce",
        // To : 'dly004@ucsd.edu',
        To : 'ngoduy1001@gmail.com',

        From : "duyngo1001@gmail.com",
        Subject : "Customer Orders",
        Body : content
    }).then(
      message => alert('Thank you for shopping with us. We will send you a quote asap.')
    );

    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var titleElement = cartRow.getElementsByClassName('cart-item cart-column')[0].getElementsByClassName('cart-item-title')[0]
        var title = titleElement.innerText
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function myFunction() {
    email = document.getElementById("email").value;
    console.log("Customer email is: " + email)
  }
function napTime(){}