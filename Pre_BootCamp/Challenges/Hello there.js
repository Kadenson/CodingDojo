//Used x,y,z variables to seperate time and different Jedi's
var x = 'Goodnight ObiWan.'
var y = 'Afternoon Master Yoda.'
var z = 'Morning Young Skywalker.'

function greet(Jedi){
    if(Jedi == 'Anakin' || Jedi == 'Yoda'){
        console.log('Good day, '+ Jedi);
    }
    else if(Jedi == 'Ben'){
        console.log(x)
    }
    else if(Jedi == 'Master'){
        console.log(y)
    }
    else if(Jedi == 'Young'){
        console.log(z);
    }
}
greet('Master');


//Cut down version with just 2 names and one given time
var x = 'Goodnight ObiWan.'

function hellothere(Jedi){
    if(Jedi == 'Anakin' || Jedi == 'Yoda'){
        console.log('Good day, '+ Jedi);
    }
    else if(Jedi == 'Ben'){
        console.log(x)
 }
}
hellothere('Ben')

//Function with multiple parameters
function greetings(Jedi, Time, Sith){
    if(Jedi == 'Anakin' || Jedi == 'Yoda'){
        return 'Good day, '+ Jedi
    }
    if(Time == 'Morning'){
        return 'Morning'
    }
    if(Sith == 'CountDooku'){
        return "I'm coming for you, Dooku!!!"
    }
}
console.log(greetings('Yoda','Morning','CountDooku'))




//CountDooku function by itself
function CountDooku(){
    console.log("I'm coming for you, Dooku!!!");//calling CountDooku will console.log this
}
CountDooku()



