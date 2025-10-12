let string = prompt("enter a string ");
if(string.startsWith("A") || string.startsWith("a") && string.length > 5) {
    console.log("Golden string");
}
else {
    console.log("Not a golden string");
}