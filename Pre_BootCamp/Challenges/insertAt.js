//Given an array, index, and additional value, insert the value into the array at the given index.
//Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

//For example, insertAt([5, 93, 22, 4], 2, 100) should return [5, 93, 100, 22, 4].
function insert(arr, num, val) {
    for (var i = 0; i < arr.length; i++) {
        arr.push(arr[2], arr[3])
        arr[2] = val
        
    }
    return arr;
}
console.log(insert([5, 93, 22, 4], 2, 100));
