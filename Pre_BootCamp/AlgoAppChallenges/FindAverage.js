//Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findavg(arr){
    var sum = 0
    for(var i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    var avg = sum /= arr.length
    return avg;
}
console.log(findavg([1,2,3]))
