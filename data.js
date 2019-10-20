  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB8tFY_RxhJccUK6KbKfnK1rGDPxvqGVug",
    authDomain: "snakebyte-4b205.firebaseapp.com",
    databaseURL: "https://snakebyte-4b205.firebaseio.com",
    projectId: "snakebyte-4b205",
    storageBucket: "snakebyte-4b205.appspot.com",
    messagingSenderId: "940306503204",
    appId: "1:940306503204:web:0da6c98cb296fa512aaab1",
    measurementId: "G-2S98730FLP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
console.log("Initialized database")
function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
writeUserData("123","cac", "cac", "cac");


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
document.write(code)
document.write(code)
document.write(code)
