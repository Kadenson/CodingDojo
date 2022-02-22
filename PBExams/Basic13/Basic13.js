//1.Print all integers from 1 to 255.
function Print1To255(){
    for(var i = 1; i<=255; i++){
        console.log(i)
    }
}
Print1To255()


//2.Print all odd integers from 1 to 255.
function PrintOdds1To255(){
    for(var i = 1; i<=255; i+=2){
        console.log(i)
    }
}
PrintOdds1To255()


//3.Print integers from 0 to 255, and with each integer print the sum so far.
    function PrintIntsAndSum0To255(){
        var sum = 0
        for(var i = 0; i<=255; i++){
            console.log(i)
            sum = sum + i;
            console.log(sum)
        }
        return sum
    }
    console.log(PrintIntsAndSum0To255())


//4.Iterate through a given array, printing each value.
function PrintArrayVals(arr){
    for(var i = 0; i<arr.length; i++){
        console.log(arr[i])
    }
}
PrintArrayVals([1,2,3,4,5])


//5.Given an array, find and print its largest element.
function PrintMaxOfArray(arr){
    var max = arr[0]
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>arr[0]){
            max = arr[i]
        }
    }
    return max
}
console.log(PrintMaxOfArray([1,2,3,4,5]))

//6.Analyze an array’s values and print the average.
function PrintAverageOfArray(arr){
    var sum = 0
    for(var i = 0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    var average = sum/arr.length 
    return average
}
console.log(PrintAverageOfArray([1,2]))


//7.Create an array with all the odd integers between 1 and 255 (inclusive).
function ReturnOddsArray1To255(){
    var arr = []
    for(var i = 1; i<=255; i+=2){
        arr.push(i)
    }
    return arr
}
console.log(ReturnOddsArray1To255())


//8.Square each value in a given array, returning that same array with changed values.
function SquareArrayVals(arr){
    for(var i = 0; i<arr.length; i++){
        arr[i] = arr[i] ** 2
    }
    return arr
}
console.log(SquareArrayVals([10,4,6]))


//9.Given an array and a value Y, count and print the number of array values greater than Y.
function ReturnArrayCountGreaterThanY(arr, y){
    var counter = 0
    for(var i = 0; i<arr.length; i++){
        if(arr[i] > y){
            counter++
        } 
    }
    return counter
}
console.log(ReturnArrayCountGreaterThanY([1,2,3], 2))


//10.Return the given array, after setting any negative values to zero.
function ZeroOutArrayNegativeVals(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i]<0)
        arr[i] = 0
    }
    return arr
}
console.log(ZeroOutArrayNegativeVals([-1,-2,-100,1,2,3,4,5]))

//11.Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr){
    let max = arr[0]
    let min = arr[0]
    let sum = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i]
        }
        if(arr[i]<min){
            min = arr[i]
        }
        sum = sum + arr[i]
    }
    let avg = sum /= arr.length
    console.log(`The max is: ${max}
The Min is: ${min}
The Average is: ${avg}`)
}
PrintMaxMinAverageArrayVals([1,2,3,6])

//12.Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
function ShiftArrayValsLeft(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr.length === 5){
            arr.shift()
        }
    }
    arr.push(0)
    return arr    
}
console.log(ShiftArrayValsLeft([1,2,3,4,5]))


//13.Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = 'Dojo'
        }
    }
    return arr
}
console.log(SwapStringForArrayNegativeVals([-4,-3,-2,-1,1,2,3,4,5]))


