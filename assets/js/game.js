// pseudocode
// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

window.alert("Welcome to Robot Gladiators!");

//global variables
    
    var playerName = window.prompt("What is your robot's name?");
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;
    console.log(playerName, playerAttack, playerHealth, playerMoney);

    //declare an array 
    var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
    var enemyHealth = 50;
    var enemyAttack = 12;
    console.log(enemyNames, enemyHealth, enemyAttack);
    
var fight = function(enemyNames) {
        // repeat and execute as long as the enemy robot is alive 
    while (enemyHealth  > 0 && playerHealth > 0)  {
          // place fight function code block here . . .
          
        //if FIGHT OR SKIP statement begin ---- 
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);

        // if player choses to fight, then FIGHT
        if (promptFight === "fight" || promptFight === "FIGHT") {
            
            // Fight begin

                    // Remove Enemy's health by subtracting the amount set in the playerAttack variable
                    enemyHealth = enemyHealth - playerAttack;
                        console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
                    // Check Enemy's health
                    if (enemyHealth <= 0) {
                        window.alert(enemyNames + " has died!");
                    } 
                    else {
                        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
                    }
                    // Removes Player's health by subtracting amts set in the enemyAttack variable
                    playerHealth = playerHealth - enemyAttack;
                        console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
                    // Check Player's health
                    if (playerHealth <= 0) {
                        window.alert(playerName + " has died!");
                        break; //if died, exit out of the game.
                    } 
                    else {
                        window.alert(playerName + " still has " + playerHealth + " health left.");
                    }                
            // Fight end

            //Skip begin
        } 
        else if (promptFight === "skip" || promptFight === "SKIP") {
                // confirm user wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            
                // if yes (true), leave fight
                if (confirmSkip) {
                    window.alert(playerName + " has decided to skip this fight. Goodbye!");
                    // subtract money from playerMoney for skipping
                    playerMoney = playerMoney - 2;
                }

            // Skip end

            // if no (false), ask question again by running fight() again
        else {
                fight();
            }
        }

    }
};

//execute function

    //-- fight just once
    //fight();

    //-- fight through array loop
/*
for(var i = 0; i < enemyNames.length; i++) {
    debugger;
    fight(enemyNames[i]);
}
*/

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i]; // create a var of the index
    enemyHealth = 50; // after enemy1 dies, enemy2 will have fresh new health
    fight(pickedEnemyName);
}