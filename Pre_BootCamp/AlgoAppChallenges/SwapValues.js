//Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function SwapArr(arr){
    if(arr.length>=2){
        var i = arr.length-1
        var temp = arr[0]
        arr[0] = arr[i]
        arr[i] = temp    
    }
return arr
}
console.log(SwapArr([1,2,3]))



