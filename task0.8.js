function convert(time) {
    var hours = Math.floor(time / 60);
    var minutes = time % 60;
    return hours + " : " + minutes;
}
console.log(convert(71));