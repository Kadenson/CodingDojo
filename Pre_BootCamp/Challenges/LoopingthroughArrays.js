// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
for(var x = 0; x<=6; x++){
    if(x<=6){
        console.log(arr1[x]);
    }
}



// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
for(var x = 0; x<=6; x++){
    sum = x +arr2[x]
    console.log(sum);
}




// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];
for(var x = 0; x<7; x++){
    if(arr3[x]>5){
        console.log(arr3[x])
    }
}

//Ninja bonus
var arr3 = [6, 2, 12, 14, -24, 5, 0];
for(var x = 0; x<7; x++){
    if(arr3[x]>5){
        console.log(arr3[x])
    }
    else{
        arr3[x] = 'no dice'
    }
}

