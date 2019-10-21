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

var inventoryRef = db.collection("inventory");

inventoryRef.doc("david").set({
    name: "david", 
    price : "1234", 
    src : "images/banner.jpg" });

inventoryRef.doc("jmo").set({
    name: "jmo", 
    price: "12424", 
    src: "images/banner.jpg" });

inventoryRef.doc("thomas").set({
    name: "thomas", 
    price: "123434", 
    src: "images/banner.jpg" });
    
// // single query
// var docRef = db.collection("inventory").doc("david");

// function getSingleQuery(callback){

//     docRef.get().then(function(doc) {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//             var name = doc.get('name')
//             console.log(name)
            
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//         callback(doc.data(), ready);
//     }).catch(function(error) {
//         console.log("Error getting document:", error);
//     });
    
// }

// getSingleQuery(displayItem);

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
getAllItems(inventoryRef, displayItem, init)

var sectionHeader = "concac"
    var globalStr = `<section class="container content-section">
    <h2 class="section-header" id = "${sectionHeader}">${sectionHeader}</h2>
    <div class="shop-items">`

function getAllItems(ref, displayItem, callback){
    writing = ""
    var sectionHeader = "concac"
    var sectionBegin = `<section class="container content-section">
    <h2 class="section-header" id = "${sectionHeader}">${sectionHeader}</h2>
    <div class="shop-items">`
    var sectionEnd = `</div>
    </section>`
    writing += sectionBegin
    globalStr += sectionBegin
    writing = loopDatabase(ref, writing, displayItem);
    setTimeout(() => {
        writing += sectionEnd
        globalStr += sectionEnd
        console.log('final', writing)
        console.log('global',globalStr )
        var d1 = document.getElementById('test');
        d1.insertAdjacentHTML('afterend', globalStr);
        callback() // call ready in store.js
        
    }, 2000);

}

function loopDatabase(ref, writing, displayItem) {
    temp = writing
    
    ref.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            temp += displayItem(doc.data());
            console.log('TEMP', temp)
        });
    });
    // console.log('global', globalStr)
    globalStr = temp
    return temp
}

function displayItem(data){
    
    var ItemTitle = data.name
    // var imgSrc = data.src
    var imgSrc = "/Images/Album 1.png"
    var itemPrice = data.price

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
    globalStr += singleItem
    return singleItem
    // var writing = sectionBegin + wholeItem + wholeItem + sectionEnd
    // writing = wholeSection


//TODO 

    // var info = {d1, sectionBegin, singleItem, sectionEnd }
    // // first(info, second)
    // d1.insertAdjacentHTML('beforeend', sectionBegin);
    // d1.insertAdjacentHTML('beforeend', sectionEnd);

    // d1.insertAdjacentHTML('beforeend', singleItem);
    // d1.insertAdjacentHTML('beforeend', singleItem);
    
    
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