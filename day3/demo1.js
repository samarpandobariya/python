let firstPromise = new Promise (function(resolve,reject){
    let a=10;
    let b=20;
        if (a<b) {
            resolve("b is grater , success ");
        } else {
            reject(" a is not grater ")
        }
    });
    firstPromise.then(function (success){
        console.log(success);
    } ).catch(function(error){
        console.log(error);
    });