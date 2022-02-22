function a(){ 
    console.log('Hello'); 
    var result = b(10); 
    return result; 

} 
function b(y){ 
    console.log('world'); 
    return y*2+5; 
} 
var answer =a(); 
console.log(answer);

//There will be 3 T-Diagrams
