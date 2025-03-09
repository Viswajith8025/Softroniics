
// arr.forEach((a)=>console.log(a))
// let map = arr.map((a)=>a*2)
// console.log(map);

// let hello = arr.filter(a=>a>3).map(a=>a*2)
// console.log(hello);


// let map = arr.map(myFunction)
// function myFunction(arr,value){
//     return arr*2
    
// }

// console.log(map);

// function hello(){
//     console.log("welcome");  
// }

// let hello =a=>a
// console.log(hello(1,2));
// let arr = [1,2,3,4,5]


// let hello = arr.reduce((a,b)=>a<b?a:b)
// console.log(hello);

//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]
]


// let pos = covid_data.map(a=>a[2]).reduce((a,b)=>a>b?a:b);
let pos = covid_data.reduce((a,b)=>a[3]>b[3]?a:b)
console.log(pos[1]);






