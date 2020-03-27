/* ----------------- Module 3 - second  part * ----------------- */

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName, enemyAttack, enemyHealth);

 //compare these 2 methods:

/* compare with just a 'function declaration'; creates function only
function fight() {
    window.alert("Welcome to Robot Gladiators!");
  }
  */

 var fight = function() {
  // Alert users that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } 
      else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
      
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

};


  

//execute function
fight();

/* sample math within a console log func
// this will be 10
console.log(4 + 6);

// this will be 46
console.log("4" + 6);

*/

/* -----------------  Module 3 - first part ----------------- 

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

 */
 
