var fs = require('fs');

fs.open('demo.txt','w',function (err,file){

    if (err)throw err;
    console.log('File Open In Write Mode!')
});