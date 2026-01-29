let productName = ("Coffee Mug");
let costPerUnit = ("13.75");
let basePrice = ("15.55");
let discountRate = ("0.35");
let salesTaxRate = ("0.05");
let fixedMonthlyCosts = ("rent = $750");

// Awesome Code
discountedPrice = basePrice * (1 - discountRate);
finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
profitPerUnit = finalPriceWithTax - costPerUnit;
breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
isProfitablePerUnit = (profitPerUnit > 0);

console.log("TEST")


console.log(productName);
console.log(discountedPrice);
console.log(finalPriceWithTax);
console.log(profitPerUnit);
console.log(breakEvenUnits);
console.log(isProfitablePerUnit);


