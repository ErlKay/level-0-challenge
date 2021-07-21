function convert(time) {
    var hr = Math.floor(time / 60);
    var min = time % 60;
    console.log(hr + ' hour' + " , " + min + ' minutes');
}
convert(71);
