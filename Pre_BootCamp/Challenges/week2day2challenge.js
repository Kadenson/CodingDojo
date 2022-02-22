function loops(arr){
    for(var i = 0; i<arr.length; i++){
        console.log(arr[i])
    }
}
loops([1,2,3])

function loops2(arr){
    if(arr.length<2){
    return null
    }
    var Count = 0
    for(var i = 0; i<arr.length; i++){
        if(arr[1]<arr[i]){
            Count++
        }
    }
    return Count
}
console.log(loops2([1]))

console.log(loops2([1,2,3,4,5]))