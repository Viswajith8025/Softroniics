let sen = "The apple tree in the garden had an apple fall, and another apple rolled down the hill."
let str = "The"
let count = 0
sen = sen.toLowerCase().replaceAll(".", "").replaceAll(",", "").replaceAll("!", "").replaceAll("?", "");
str = str.toLowerCase()
let words = sen.split(" ");
for (let i = 0; i < words.length; i++) {
    if (words[i] == str) {
        count++;
    }
}
console.log(Occurences = + count);