function showTime() {
    // return new date and time
    let dateTime = new Date();
    // show local time
    console.log(dateTime.toLocaleTimeString());
    // recursive call showTime function
    setTimeout(showTime,4000);

}
showTime();