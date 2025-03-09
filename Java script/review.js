function fetchData(callback) { 
    setTimeout(() => { 
        callback("Data fetched"); 
    }, 2000);

}

function processData(data) 
{ console.log(data);
    
 }

fetchData(processData);