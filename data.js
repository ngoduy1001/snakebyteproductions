/* Manually add items onto page */
// Get a reference to the database service

// function writeUserData(userId, name, email, imageUrl) {
//     firebase.database().ref('users/' + userId).set({
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
//   }
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
