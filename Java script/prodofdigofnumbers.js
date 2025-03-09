function productOfDigit(num) {
    let numStr = num.toString();
    let product=1;

    for (let digit of numStr) {
        product *= parseInt(digit);
    }

    return product;
}

console.log(productOfDigit(738)); 