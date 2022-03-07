function PushFront(arr, y){
    newArr = []
    newArr.push(y)
    for(var i = 0; i<arr.length; i++){
        newArr.push(arr[i])
    }
    console.log(newArr)
}
PushFront([1,2,3,4], 3)
