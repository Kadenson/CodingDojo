//Function with multiple parameters
function greetings(Jedi, Time, Sith){
    if(Jedi == 'Anakin' || Jedi == 'Yoda'){
        console.log('Good day, '+ Jedi)
    }
    if(Time == 'Morning'){
        console.log (Time +' '+'Anakin')
    }
    if(Sith == 'CountDooku'){
        console.log ("I'm coming for you, Dooku!!!")
    }
}
greetings('Yoda', 'Morning','CountDooku')





function hellothere(Jedi, Time, Sith){
    if(Jedi == 'Anakin' || Jedi == 'Yoda'){
        console.log ('Good day, '+ Jedi)
    }
    if(Time == 'Morning'){
        console.log ('Good Morning Master Obi Wan')
    }
    if(Sith == 'CountDooku'){
        return "I'm coming for you, Dooku!!!"
    }
}
console.log(hellothere('Yoda', 'Morning','CountDooku'))



