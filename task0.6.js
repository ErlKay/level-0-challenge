function maxNum(k, l, m) {
    let max = 0;
    if(k > l) {
        max = k;
    }else{
        max = l;
    }
    if(m > max) {
        max = m;
    }
    return max;
}
console.log(maxNum(1, 22, 3));