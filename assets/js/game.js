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
    //var playerHealth = 100;
    //var playerAttack = 10;
    //var playerMoney = 10;
//replace player variables with an object playerInfo
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10
  }
//var playerInfo.name = window.prompt("What is your robot's name?");
console.log(playerInfo.name, playerInfo.attack, playerInfo.health, playerInfo.money);

//declare an array of enemy robots & stats
    //var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
    //var enemyHealth = randomNumber();
    //var enemyAttack = 12;
//an array of enemy Objects, an array with numerical indexes ie. enemyInfo[0].name for Roborto
var enemyInfo = [
        {
            name: "Roborto",
            attack: 12
        },
        {
            name: "Amy Android",
            attack: 13
        },
        {
            name: "Robo Trumble",
            attack: 14
        }
    ];
//console.log(enemyInfo.name[0], enemyInfo.attack[0]);


//fight function
    //var fight = function(enemyName) {
var fight = function(enemy) {
    //console.log(enemy);

    while (playerInfo.health > 0 && enemy.health > 0) {
            // ask user if they'd liked to fight or run
        var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
            // if user picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm user wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerMoney for skipping
            //playerMoney = playerMoney - 10;
            //add Math function method to set max threshold to 0 to not allow negative values
            playerInfo.money= Math.max(0, playerInfo.money- 10);
            console.log("playerMoney", playerInfo.money)
            break;
          }
        }
                // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
                //enemyHealth = enemyHealth - playerAttack;
                //add Math function to set lowest at 0 to not allow negative numbers
                //enemyHealth = Math.max(0, enemyHealth - playerAttack);
            // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(playerInfo.name + ' attacked ' + enemy.name  + '. ' + enemy.name  + ' now has ' + enemy.health + ' health remaining.');

        // check enemy's health
        if (enemy.health <= 0) {
          window.alert(enemy.name  + ' has died!');
            // award player money for winning
          playerInfo.money= playerInfo.money+ 20;
            // leave while() loop since enemy is dead
          break;
        } else {
          window.alert(enemy.name  + ' still has ' + enemy.health + ' health left.');
        }
            // remove players's health by subtracting the amount set in the enemyAttack variable
            //playerHealth = playerHealth - enemyAttack;
            //add Math function to set lowest at 0 to not allow negative numbers
            //playerHealth = Math.max(0, playerHealth - enemyAttack);
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(enemy.name  + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.');
            // check player's health
        if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + ' has died!');
          // leave while() loop if player is dead
          break;
        } else {
          window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
      }
};
    


// startGame function
var startGame = function() {
  for (var i = 0; i < enemyInfo.length; i++) {
        // reset player stats
        playerInfo.health = 100;
        playerInfo.attack = 10;
        playerInfo.money= 10;

        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            //var pickedEnemyName = enemyNames[i];
            var pickedEnemyObj = enemyInfo[i];

            //enemyHealth = 50;
            //add random Math function
            //enemyHealth = randomNumber(40, 60);
            //enemyHealth = Math.floor(Math.random() * 60);
            //enemyHealth = Math.floor(Math.random() * 21) + 40;            
            pickedEnemyObj.health = randomNumber(40, 60);
    
                //pass a string into a fight() function
            //fight(pickedEnemyName);
                //now we've changed to passing an object into the fight() function
            fight(pickedEnemyObj);

            // add shop; if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money+ ".");
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
            if (playerInfo.money>= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");            
                // increase health and decrease money
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money= playerInfo.money- 7;
            }
              else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE": // new case
        case "upgrade":
            if (playerInfo.money>= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");            
               // increase attack and decrease money
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money= playerInfo.money- 7;
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
