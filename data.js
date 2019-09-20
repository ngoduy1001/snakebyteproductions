var sectionHeader = "MUSIC"
var ItemTitle = "Album 1"
var imgSrc = "Images/Album 1.png"
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
//document.write(code)