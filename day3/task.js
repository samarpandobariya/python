function jk(name,callback){
    console.log('hii'+''+name);
    callback();
}
function callme(){

    console.log('i am callback function');
}

ab('Akash',callme);
