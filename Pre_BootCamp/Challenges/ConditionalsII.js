//As a diligent student, I want to reward myself if I finish my homework, and based on the time of day,
// I want either a latte if it's before 10am, I want a hot chocolate it's between 10 and 4pm, and I want ice cream between 4pm - 10pm. 
//If it's after 10pm, I don't want anything other than sleep!


//Building off the MVP, if I'm up for ice cream, I want strawberry if it's Wednesday, otherwise I want vanilla.

function rewardbasedoftime(time, day, arr1, arr2){
    if(time <=10 && time >=8){
        console.log('Latte for me')
    }
    else if(time >=15 && time <=18 && time%2 === 0){
        let x = Math.floor((Math.random() * 3) + 0);
        console.log(arr1[x])
    }
    else if(time >=15 && time <=18 && time%2 === 1){
        let x = Math.floor((Math.random() * 3) + 0);
        console.log(arr2[x])
    }
    else if(time >=15 && time <=18 && day == 'wednesday'){
        console.log('I want Strawberry Icecream')
    }
    else if(time >=15 && time <=18 && day != 'wednesday'){
        console.log('I want Vanilla Icecream')
    }
    else{
        console.log('I just wanna sleep')
    }  
}
rewardbasedoftime(15, 'wednesday', ['ice cream', 'cookies', 'candy'],['hot coco', 'tea','cake'])


//Building off Feature 1, I want to adjust the current conditions and add a new option so that if the time is between 3pm - 6pm, 
//I want to have it pick either ice cream or hot chocolate depending on if the time is even or odd. 

function strawberryicecream(Time){
    if(Time >=3 && Time <=6 && Time%2 === 0){
        console.log('Ice cream time')
    }
    else{
        console.log('Hot Coco time')
    }
}
strawberryicecream(4)

//Building off Feature 2, I want my options for the 3pm - 6pm slot to be a random selection from a group of 4 options: if the time is even, 
//I want my selections to be ice cream, cookies, or candy. If the time is odd, I want my selections to be hot chocolate, tea, or cake.

function strawberryicecream(Time,arr1,arr2){
    if(Time >=3 && Time <=6 && Time%2 === 0){
        let x = Math.floor((Math.random() * 3) + 0);
        console.log(arr1[x])
    }
    else{
        let x = Math.floor((Math.random() * 3) + 0);
        console.log(arr2[x])
    }
}
strawberryicecream(3,['ice cream', 'cookies', 'candy'],['hot coco', 'tea','cake'])



let x = Math.trunc((Math.random() * 3 - 0) + 0);
console.log(x)

function rewardbasedoftime(time, day, arr1, arr2){
    if(time <=10 && time >=8){
        console.log('Latte for me')
    }
    else if(time > 10 && time <15){
        console.log('Hot chocolate')
    }
    if(time >=15 && time <=18 && time%2 === 0){
        let x = Math.floor((Math.random() * 3) + 0);
        if(arr1[x] === 'ice cream' && day === 'wednesday'){
            console.log('Stawberry icecream')
        }
        else if(arr1[x] === 'ice cream' && day != 'wednesday'){
            console.log('Vanilla icecream')
        }
        else{
            console.log(arr1[x])
        }
    }
    else if(time >=15 && time <=18 && time%2 === 1){
        let x = Math.floor((Math.random() * 3) + 0);
        console.log(arr2[x])
    }
    else if(time >18 && time <22){
        console.log('Ice cream')
    }
    else{
        console.log('I just wanna sleep')
    }  
}
rewardbasedoftime(0, 'wednesday', ['ice cream', 'cookies', 'candy'],['hot coco', 'tea','cake']);