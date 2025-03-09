function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkFirstElement(arr) {
    const firstElement = arr[0];
    
    if (typeof firstElement !== "number") {
        return "First element is not a number.";
    }
    
    return isPrime(firstElement) 
        ? `${firstElement} is a prime number.` 
        : `${firstElement} is not a prime number.`;
}


