// pseudocode
// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

//global variables

// function to generate a random numeric value
    // for example function(40,60) min is 40, max is 60
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);  
    return value;
  };

//declare player stats   
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth, playerMoney);

//declare an array of enemy robots & stats
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = randomNumber();
var enemyAttack = 12;
console.log(enemyNames, enemyHealth, enemyAttack);



//fight function
var fight = function(enemyName) {

    while (playerHealth > 0 && enemyHealth > 0) {
            // ask user if they'd liked to fight or run
        var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
            // if user picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm user wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerMoney for skipping
            //playerMoney = playerMoney - 10;
            //add Math function method to set max threshold to 0 to not allow negative values
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney)
            break;
          }
        }
                // remove enemy's health by subtracting the amount set in the playerAttack variable
                //enemyHealth = enemyHealth - playerAttack;
                //add Math function to set lowest at 0 to not allow negative numbers
                //enemyHealth = Math.max(0, enemyHealth - playerAttack);
            // generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.');

        // check enemy's health
        if (enemyHealth <= 0) {
          window.alert(enemyName + ' has died!');
            // award player money for winning
          playerMoney = playerMoney + 20;
            // leave while() loop since enemy is dead
          break;
        } else {
          window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }
            // remove players's health by subtracting the amount set in the enemyAttack variable
            //playerHealth = playerHealth - enemyAttack;
            //add Math function to set lowest at 0 to not allow negative numbers
            //playerHealth = Math.max(0, playerHealth - enemyAttack);
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);
        console.log(enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.');
            // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + ' has died!');
          // leave while() loop if player is dead
          break;
        } else {
          window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
      }
};
    


// startGame function
var startGame = function() {
  for (var i = 0; i < enemyNames.length; i++) {
        // reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            //enemyHealth = 50;
            //add random Math function
            //enemyHealth = randomNumber(40, 60);
            //enemyHealth = Math.floor(Math.random() * 60);
            enemyHealth = Math.floor(Math.random() * 21) + 40;            
    
            fight(pickedEnemyName);

            // add shop; if we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // vist the store confirm
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                // if yes, take them to the store() function
                if (storeConfirm) {
                  shop();
                }
              }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    endGame();
    
};


//endGame function
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
    // restart the game
        startGame();
    } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

//shop function
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");            
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
              else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE": // new case
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");            
               // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
              else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE": // new case
        case "leave":
            window.alert("Leaving the store.");    
            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");    
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

//call the startGame function
startGame();
