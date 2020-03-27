/* ----------------- Module 3 - draft 2 * ----------------- */

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth, playerMoney);

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

// -- fight function begin -- 
 var fight = function() {
  // Alert users that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  //variable named promptFight
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  console.log(promptFight);

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
      
    //if FIGHT OR SKIP statement begin ---- 

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
      // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
      // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
       // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  /*  // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!");
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
  */

} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  }
  

  //if FIGHT OR SKIP statement end ---- 

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

// -- fight function end --
  

//execute function
fight();

/* sample math within a console log func
// this will be 10
console.log(4 + 6);

// this will be 46
console.log("4" + 6);

*/

/* -----------------  Module 3 - draft 1 - not used ----------------- 

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
 
