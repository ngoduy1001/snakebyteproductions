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

davidRef.doc("david").set({
    name: "david", 
    price : "1234", 
    src : "images/banner.jpg" });

davidRef.doc("jmo").set({
    name: "jmo", 
    price: "12424", 
    src: "images/banner.jpg" });

davidRef.doc("thomas").set({
    name: "concac", 
    price: "123434", 
    src: "images/banner.jpg" });
    
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
        callback(doc.data());
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
function displayItem(data){
// var sectionHeader = "concac"
// var ItemTitle = "David Bitch"
// var imgSrc = "images/banner.jpg"
// var itemPrice = "13299"
var sectionHeader = "concac"
var ItemTitle = data.name
var imgSrc = data.src
var itemPrice = data.price
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
}