function greeting(Person){
    if(Person == 'Anakin')
    for(var num = 0; num<3; num++){
        if(num == 0){
            console.log('Good day, Anakin')
        }
        else if (num ==1){
            console.log('Good Afternoon Master Yoda')
        }
        else{
            return "I'm coming for you, Dooku!!!"
        }
    }
}
console.log(greeting('Anakin'))

