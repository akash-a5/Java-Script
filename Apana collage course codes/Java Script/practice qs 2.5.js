let num1 = prompt("Enter the first number :");
let num2 = prompt("Enter the second number :");
let num3 = prompt("Enter the second number :");

let largest ;

if(num1 >= num2 && num1 >= num3 ){
    console.log("largest number is 1");
}
else if(num2 >= num1 && num2 >= num3){
   console.log("largest number is 2");
}
else {
   console.log("largest number is 3");
}