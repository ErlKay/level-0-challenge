function triangleArea(k, l, m) {
    var p = (k + l + m) / 2;
    var a = Math.sqrt(p * (p - k) * (p - l) * (p - m));
    return a;
}
console.log(triangleArea(3, 4, 5));