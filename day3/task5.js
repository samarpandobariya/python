const fs = require('fs');

fs.writeFile("demo.txt","hello",(err)=>{
    console.log("file created!");
    console.log(err);

});