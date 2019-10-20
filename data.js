  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBoI34k9HA9vtPQs5MrsqeREjL1UFLvDjA",
    authDomain: "snakebyte-f8830.firebaseapp.com",
    databaseURL: "https://snakebyte-f8830.firebaseio.com",
    projectId: "snakebyte-f8830",
    storageBucket: "snakebyte-f8830.appspot.com",
    messagingSenderId: "168408660958",
    appId: "1:168408660958:web:d18a2a041b818bed4f7b4f",
    measurementId: "G-TYQNSH7RWF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
console.log("wtf")

console.log("wtf")
// writeUserData(1, "cac", "hello")
var sectionHeader = "concac"
var ItemTitle = "David Bitch"
var imgSrc = "images/banner.jpg"
var itemPrice = "13299"
var code = `<section class="container content-section">
    <h2 class="section-header" id = "${sectionHeader}">${sectionHeader}</h2>
    <div class="shop-items">
        <div class="shop-item">
            <span class="shop-item-title">${ItemTitle}</span>
            <img class="shop-item-image" src="${imgSrc}"> 
            <div class="shop-item-details">
                <span class="shop-item-price">$${itemPrice}</span>
                <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
            </div>
        </div>
    </div>
</section>`
console.log("wtf")
document.write(code)
document.write(code)
document.write(code)
