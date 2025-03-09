

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


//1. district having Highest +ve case - 
let posCas = covid_data.reduce((a,b)=>a[3]>b[3]?a:b)
console.log(posCas[1]);

console.log('-------------------------------------------');


//2. district having Highest 1st dose vaccine - 

let firstDose = covid_data.reduce((a,b)=>a[5]>b[5]?a:b)
console.log(firstDose[1]);
console.log('-------------------------------------------');


//3. district having lowest death rate - 

let lowDeath = covid_data.reduce((a,b)=>a[3]<b[3]?a:b)
console.log(lowDeath[1]);
console.log('-------------------------------------------');


//4. sort data with +ve case in descending order - 

let posDesc = covid_data.sort((a,b)=>b[2] - a[2])
console.log(posDesc);

console.log('-------------------------------------------');

//5. is district with +ve cases > 15000 - 

let dis = covid_data.filter(a=>a[2]>15000)
console.log(dis);

console.log('-------------------------------------------');













