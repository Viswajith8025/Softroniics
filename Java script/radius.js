const radius = [51, 2, 73]
function area(radius) {
    return Math.PI * radius * radius;
}

function dia(radius) {
    return 2 * radius;
}

function highorder(radius, callback) {
    let op = []
    for (i in radius) {
        op.push(callback(radius[i]))
    }
    return op
}

console.log(highorder(radius, area))
console.log(highorder(radius, dia))