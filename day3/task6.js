const fs = require('fs');

fs.appendFile("test.txt","hello nodejs",(err)=>{
    console.log("file content updated!");
    console.log(err);

});