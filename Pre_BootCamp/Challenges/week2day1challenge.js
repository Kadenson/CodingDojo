for(var Num = 2020; Num>=4; Num-=4){
    console.log(Num)
    }



    var Num = 2020;
    while(Num >= 4){
        console.log(Num);
        Num-= 4; 
    }




function FlexCountDown(lowNum,highNum,mult){
    for(var Num = highNum; Num>=lowNum; Num-=mult){
        console.log(Num)
    }
}
FlexCountDown(2,10,2)

function FlexCountDown2(param1,param2,param3,param4){
    var i = param2;
    while(i<param3){
        i++
        if(i % param1 == 0 && i != param4){
            console.log(i);
        }
    }
}
FlexCountDown2(3,5,15,9)