//1. We need a loop because we need it to count from 0 to 6 and check every 2 miles up to 6
for(var x = 0; x<=6; x = x+2){//2. This is the start of the loop
    console.log(x);
    if(x == 0){
        console.log("Start running kid!");
    }
    else if(x == 2 || x == 4){
        console.log("Get a piece of candy");
    }
    else{
        console.log("no more candy for you!");
    }
}
//3. The loop should stop when it reaches 6 miles or 6.
//4. The loop knows when to stop due to the x<=6. When it hits 6 the loop ends.
//5. The incrementing is +2 or x = x+2
//6. We only need one variable for the starting miles.

var speed =5.5

for(var x = 0; x<=6; x = x+2){
    console.log(x);
    if(x == 0){
        console.log("Start running kid!");
    }
    if(speed>=5.5 && x<6){
        console.log("Your moving fast enough");
    }
    else if (x<=6 && speed>=5.5){
        console.log("Your all done kid, no more candy")
    }
    else{
        console.log("To slow kiddo!");
    }
    if(x == 2 || 4 && speed>=5.5){
        console.log("Get a piece of candy");
    }
    else if (x == 2 || 4){
        console.log("No candy this time");
}
}