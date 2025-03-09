const { log } = require("console")
const http=require("http")
http.createServer((req,res)=>{
    res.write("hello")
    res.end()
}).listen(4000,()=>{console.log("mmoooooo...");
})