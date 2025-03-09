let vowels = "aeiou"
let str = "VISWAJITH"
str = str.toLowerCase();
str = str.replaceAll(" ", "");
let vc = 0;
let cc = 0;

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        vc++
    }
    else {
        cc++
    }
}

console.log("Vowels = " + vc);
console.log("Consonants = " + cc);