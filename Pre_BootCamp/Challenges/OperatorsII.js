//As the designated cake slicer and distributor at our office birthday parties, I want a function called howMuchLeftOverCake that 
//passes two variables numberOfPieces and numberOfPeople into it and figures out the remainder pieces of cake.

function howMuchLeftOverCake(numberOfPieces,numberOfPeople){
    var remainder = numberOfPieces%numberOfPeople
    return remainder
}
console.log(howMuchLeftOverCake(12,5))

//Building off Feature 1 , I want to the console.log() to display "No leftovers for you!" if there aren't any left overs, 
//"You have some left overs" if there are 2 pieces of cake or less, "You have left overs to share" if there are 3 - 5 pieces of 
//cake left over, or "Hold another party!" if there are more than 5 pieces of cake left over.

function howMuchLeftOverCake(numberOfPieces,numberOfPeople){
    var remainder = numberOfPieces%numberOfPeople
    if(remainder === 0){
        console.log('No leftovers for you')
    }
    else if(remainder === 2){
        console.log('You have some left overs')
    }
    else{
        console.log('Hold another party')
    }
    return remainder
}
console.log(howMuchLeftOverCake(12,7))
