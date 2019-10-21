// Config for firebase
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
//   firebase.analytics();
var db = firebase.firestore();
console.log("Initialized database")

// var davidRef = db.collection("cities");

// davidRef.doc("SF").set({
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000,
//     regions: ["west_coast", "norcal"] });
// davidRef.doc("LA").set({
//     name: "Los Angeles", state: "CA", country: "USA",
//     capital: false, population: 3900000,
//     regions: ["west_coast", "socal"] });
// davidRef.doc("DC").set({
//     name: "Washington, D.C.", state: null, country: "USA",
//     capital: true, population: 680000,
//     regions: ["east_coast"] });
// davidRef.doc("TOK").set({
//     name: "Tokyo", state: null, country: "Japan",
//     capital: true, population: 9000000,
//     regions: ["kanto", "honshu"] });
// davidRef.doc("BJ").set({
//     name: "Beijing", state: null, country: "China",
//     capital: true, population: 21500000,
//     regions: ["jingjinji", "hebei"] });

var davidRef = db.collection("inventory");

// davidRef.doc("david").set({
//     name: "david", 
//     price : "1234", 
//     src : "images/banner.jpg" });

// davidRef.doc("jmo").set({
//     name: "jmo", 
//     price: "12424", 
//     src: "images/banner.jpg" });

// davidRef.doc("thomas").set({
//     name: "concac", 
//     price: "123434", 
//     src: "images/banner.jpg" });
    
// single query
var docRef = db.collection("inventory").doc("david");

function getSingleQuery(callback){

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            var name = doc.get('name')
            console.log(name)
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        callback(doc.data(), ready);
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
}

getSingleQuery(displayItem);

// /* multiple queries */
// db.collection("inventory").get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//         console.log("Wtf")
//         console.log(doc.data().name)
//         // displayItem(doc.data());
//     });
// });

// var sectionHeader = "concac"
// var ItemTitle = "cac"
// var imgSrc = "cac"
// var itemPrice ="cac"

function displayItem(data, callback){
var sectionHeader = "concac"
var ItemTitle = data.name
// var imgSrc = data.src
var imgSrc = "/Images/Album 1.png"
var itemPrice = data.price
// var code = `<section class="container content-section">
//     <h2 class="section-header" id = "${sectionHeader}">${sectionHeader}</h2>
//     <div class="shop-items">
//         <div class="shop-item">
//             <span class="shop-item-title">${ItemTitle}</span>
//             <img class="shop-item-image" src="${imgSrc}"> 
//             <div class="shop-item-details">
//                 <span class="shop-item-price">$${itemPrice}</span>
//                 <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
//             </div>
//         </div>
//     </div>
// </section>`

var sectionBegin = `<section class="container content-section">
    <h2 class="section-header" id = "${sectionHeader}">${sectionHeader}</h2>
    <div class="shop-items">`
var singleItem = `    
    
        <div class="shop-item">
            <span class="shop-item-title">${ItemTitle}</span>
            <img class="shop-item-image" src="${imgSrc}"> 
            <div class="shop-item-details">
                <span class="shop-item-price">$${itemPrice}</span>
                <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
            </div>
        </div>
    `
var sectionEnd = `</div>
</section>`

var whole = 
`<section class="container content-section">
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

var wholeItem =`
<div class="shop-item">
<span class="shop-item-title">Album 1</span>
<img class="shop-item-image" src="Images/Album 1.png">
<div class="shop-item-details">
    <span class="shop-item-price">$12.99</span>
    <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
</div>
</div>`
var wholeSection = `
<section class="container content-section">
            <h2 class="section-header" id = "MERCH" >MERCH</h2>

            <div class="shop-items">

                <div class="shop-item">
                    <span class="shop-item-title">T-Shirt</span>
                    <img class="shop-item-image" src="Images/Shirt.png">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$19.99</span>
                        <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                    </div>
                </div>

                <div class="shop-item">
                    <span class="shop-item-title">Coffee Cup</span>
                    <img class="shop-item-image" src="Images/Cofee.png">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$6.99</span>
                        <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                    </div>
                </div>

            </div>

        </section>`

// var writing = sectionBegin + singleItem + singleItem + singleItem +singleItem+ sectionEnd
var writing = sectionBegin + wholeItem + wholeItem + sectionEnd
writing = wholeSection
var d1 = document.getElementById('test');
d1.insertAdjacentHTML('afterend', writing);
// var info = {d1, sectionBegin, singleItem, sectionEnd }
// // first(info, second)
// d1.insertAdjacentHTML('beforeend', sectionBegin);
// d1.insertAdjacentHTML('beforeend', sectionEnd);

// d1.insertAdjacentHTML('beforeend', singleItem);
// d1.insertAdjacentHTML('beforeend', singleItem);
callback()
}

// function first(info, cb){
//     info.d1.insertAdjacentHTML('afterend', info.sectionBegin);
//     cb(info, third);
// }
// function second(info, cb) {
//     info.d1.insertAdjacentHTML('afterend', info.singleItem);
//     info.d1.insertAdjacentHTML('afterend', info.singleItem);
//     cb(info);
// }
// function third(info) {
//     info.d1.insertAdjacentHTML('afterend', info.sectionEnd);
// }