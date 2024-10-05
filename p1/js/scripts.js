// Welcome Message
//prpduct price
    var price = 20;
    familyDiscount = .50;
    var familyPrice = price - (price * familyDiscount);
    priceEl = document.getElementById("price");
    familyPriceEl = document.getElementById("family-price");

    priceEl.textContent = price.toFixed(2);
    familyPriceEl.textContent = familyPrice.toFixed(2);