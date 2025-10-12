let string = "akash";

if ( string.length > 3 && string[0] == "a" ){
    console.log("good string");
}
else{
    console.log("not good string");
}



let num = 12;
if ((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))){
    console.log("safe");
}
else
{
    console.log("unsafe");
}