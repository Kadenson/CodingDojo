function interArr(arr){
    var sum = 0
    for(var i = 0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}
var print = interArr([1,2,3,5])
console.log(print)