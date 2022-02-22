function sum_even_numbers(){
    var sum = 0;
    for(var x = 0; x<=1000; x+=2){
     if(x%2 === 0){
         sum = sum + x
     }
    }
    return sum;
}
console.log(sum_even_numbers())
