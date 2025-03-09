const userinput = [
    { name: "john", age: 24 },
    { name: "alice", age: 22 },
    { name: "bob", age: 30 }
];

// Sort the array alphabetically by name using a custom comparison function
userinput.sort((a, b) => {
    if (a.name < b.name) return -1; // a comes before b
    if (a.name > b.name) return 1;  // a comes after b
    return 0; // names are equal
});

// Check the sorted array
console.log(userinput);
