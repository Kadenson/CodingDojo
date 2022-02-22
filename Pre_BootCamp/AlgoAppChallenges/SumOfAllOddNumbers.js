function sum_odd_5000(){
    var sum = 0;
    for(var x = 1; x<=5000; x+=2){
        if(x%2 === 1){
            sum = sum + x;
        }
    }
    return sum;
}
console.log(sum_odd_5000())