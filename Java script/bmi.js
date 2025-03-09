function bmicalculator(){
    const weight=parseInt(document.getElementById('weight').value);
    const age=parseInt(document.getElementById('age').value);
    const height=parseInt(document.getElementById('height').value);
}
if (height>0 && weight >0 && age>0){
    const bmi=(weight/(height*height));
    document.getElementById('result').innerText='your bmi is:${bmi}';
}


