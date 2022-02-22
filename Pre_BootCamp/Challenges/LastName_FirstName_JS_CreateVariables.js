//Step 1: Identify what variables are needed to determine if a rider can ride the rollercoaster.
//Step 2: In VS Code, create those variables.
//Step 3: In your same VS Code file, use comments to explain what the variables must be set to in order for the rider to ride. 

var height = 42// var height must be 42 or higher to get on the ride. Anything below that will deny entry
var age = 10// var age must be 10 or higher to get on the ride. Anything below that will deny entry
if(height >= 42){
    console.log('You are tall enough to ride');
}
if(age >= 10){
    console.log('You are old enough to ride');
}