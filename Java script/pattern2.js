let n = 5; 


for (let i = 1; i <= n; i++) { 
    let stars = "*".repeat(2*i - 1); 
    let spaces = ' '.repeat(n - i); 
    console.log(spaces + stars); 
} 

for (let i = n - 1; i >= 1; i--) { 
    let stars = "*".repeat(2*i - 1); 
    let spaces = ' '.repeat(n - i); 
    console.log(spaces + stars); 
}