function sumOfDigit(num) {
    let numStr = num.toString();
    let sum = 0;

    for (let digit of numStr) {
        sum += parseInt(digit);
    }

    return sum;
}

console.log(sumOfDigit(738)); 