function AlwaysHungry(arr){
    var food = "food"
    for(var i = 0; i<arr.length; i++){
        if(arr[i] == food){
            console.log("Yum")
        }
    }
    arr[i] != food == false
    if(arr[i] == false)
    console.log("im hungry")
}
AlwaysHungry([1,2,3,4])


function hungry2(arr){
    var stillHungry = true;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === "food"){
        console.log("yum");
        stillHungry = false;
      }
    }
    
    if(stillHungry){ //false
      console.log("always hungry!");
    }
  }
hungry2([1,"food",3])