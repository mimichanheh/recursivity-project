function fibs(n) {
    let arr = [];
    for(let i=0 ; i<n ; i++) {
        if(i==0 || i==1) {
            arr[i] = i;
        }
        else {
            arr[i] = arr[i-1] + arr[i-2]
        }
    }
    return arr;
}

function fibsRec(n) {
    if(n<=0) return [];
    if(n===1) return [0];
    if(n===2) return [0,1];
    prev = fibsRec(n-1);
    return [...prev, prev[prev.length-1] + prev[prev.length - 2]]
}
console.log(fibs(16))
console.log(fibsRec(16))