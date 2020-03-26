//window.alert("This is an alert! JavaScript is running!");

//prompt() function belongs to object window, this is called a method.
//window.prompt("What is your robot's name?");

//declared variable with assigned value
//var playerName = "Tony the Robot"

//adding a variable to make this fully an expression. 
//This allows the users input to be stored somewhere.
var playerName = window.prompt("What is your robot's name?");

// Note the lack of quotation marks around playerName
//window.alert(playerName);
console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName);


function fight() {
    window.alert("The fight has begun!");
  }

 // fight();