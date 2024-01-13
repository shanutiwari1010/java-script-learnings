var sellingPrice = 199;
var listingPrice = 799;

var discounPercent = ((listingPrice-sellingPrice)/listingPrice)*100;
console.log("discount percentage is :",discounPercent);

displayDiscountPercentage = Math.round(discounPercent);
console.log(displayDiscountPercentage + "% off");

var result = listingPrice> sellingPrice;
console.log(typeof result)