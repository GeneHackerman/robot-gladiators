/*var playerName = window.prompt("What is your robot's name?");   
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function(enemyNames) {
        //place fight function code here
        for(var i = 0; i < enemyNames.length; i++) {
            // call fight function with enemy-robot
            fight(enemyNames[i]);
        }
    // repeat and execute as long as the enemy-robot is alive
    if (enemyHealth > 0) // if the enemy-robot has health points, continue to fight
    while(enemyHealth > 0) {
    
    }
    // fight function statements
    // Alert players that they are starting the round 
    window.alert("Welcome to Robot Gladiators!");
    
    // Ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAttack variable 
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
    

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
    }
    else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to the console so we know that it worked. 
    console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    
    //if player choses to skip
    }else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
        // confirm player wants to skip
        var confirmskip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmskip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney -2;
        }
    }
    // if no (false), ask question again by running fight() again
    else {
        window.alert("You need to choose a valid option. Try again!");
    }

};
*/

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyNames) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0) {
        var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
        // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
    
        // subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;   
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
        }
        else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left. ");
        }
    
        // subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "health remaining."
        );
    
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmskip = window.confirm("Are you sure you'd like to quit?");
    
            // if yes (true), leave fight
            if (confirmskip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            }
            // if no (false), ask question again by running fight() again
        } else {
            fight();
        }

    }
   
}

// this for statement runs the loop and is below var function
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}