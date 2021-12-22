var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[1]); 
console.log(enemyNames[2]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyNames) {
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player chooses to skip, confirm and then stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmskip = window.confirm("Are you sure you'd like to quit?");
        
        // if yes (true), leave fight
        if (confirmskip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
        }
    }
    
        // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") 
        {
    
        // subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;   
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;
            
            //leave while() loop since enemy is dead
            break;
        } else {
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
            // leave while() loop if player died
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        
            // if no (false), ask question again by running fight() again
        } else {
            fight();
        }

    }
   
};
    

var startGame = function() {
     // reset player stats
     playerHealth = 100;
     playerAttack = 10;
     playerMoney = 10;


// this for statement runs the loop and is below var function
for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert(" Welcome to Robot Gladiators! Round " + (i + 1) );

    
    
    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
    
    // reset enemyHealth before starting new fight
    enemyHealth = 50;
    
    // user debugger to pause script from running and check what's going on at the moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
    
} 
// if player isn't alive, stop the game
else {
    window.alert("You have lost your robot in battle! Game over!");
    break;
    }
    
}
// end game
endGame();


};

// function to end game
var endGame = function () {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
    window.alert("The game has now ended. Let's see how you did!");
    }


// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    // restart the game
    startGame();
} else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");

}

};

//start game when page loads
startGame();


     



