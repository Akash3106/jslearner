var sellingPrice = 199
var listingPrice = 799

var discount = ((listingPrice - sellingPrice) / listingPrice) * 100

console.log("Discounted Percentage : " + discount)

discountPercentage = Math.round(discount)

console.log("Discount Percentage with roundoff : " + discountPercentage)
                                             

var result = listingPrice > sellingPrice

console.log(typeof result)   