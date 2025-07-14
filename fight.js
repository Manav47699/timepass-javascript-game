//I am not using array and instead going with dictionary to bring more randomness in the game as well to give the option of both "causing damage" and "gaining hp" after each attack
// let attacking_attacks = [4000, 3500, 3000, 2500, 3000];
// let defensive_attacks = [2000, 1500, 2500, 2000, 1000];

//Here are the dictinares for both attack statgies. I have tried the to keep the values as perfect as possible.
//KEY -> damage caused to the other player
//VALUE -> HP GAINED by the player
let attacking_attacks = {
  10000: 0,     // max damage, no HP gain
  8000: 200,   // high damage, low gain
  7500: 400,
  7600: 600,
  7000: 700,    // low damage, better recovery
};
let defensive_attacks = {
  1000: 2000,   // lowest attack, highest HP gain
  1500: 6000,
  2000: 8000,   // only one 2000 now (no duplicate key)
  2300: 6100,
  2500: 4800,     // highest defense hit, lowest gain
};

//setting hp values 
let player1_hp = 50000, player2_hp = 50000;

//displaying the HP values through HTML documnet
document.getElementById("player1_hp").textContent = player1_hp;
document.getElementById("player2_hp").textContent = player2_hp;

//RESET button; when click will reset the HP values of both the player back to deafult
let reset;
document.getElementById("reset").onclick = function ()
{
    player1_hp = 50000;
    player2_hp = 50000;
    document.getElementById("player1_hp").textContent = player1_hp;
    document.getElementById("player2_hp").textContent = player2_hp;
    
}

//The first player is choosen at random and displayed
let turn = Math.random() < 0.5 ? "player1" : "player2";
document.getElementById("turn").textContent = turn;

//Getting the name of each players and displaying it
let player1, player2;
document.getElementById("player1_button").onclick = function ()
{
    player1 = document.getElementById("player1_name").value;
    document.getElementById("player1_confirm").textContent = player1;
    document.getElementById("player1_name_2nd").textContent = player1;

}
document.getElementById("player2_button").onclick = function () {
    player2 = document.getElementById("player2_name").value;
    document.getElementById("player2_confirm").textContent = player2;
    document.getElementById("player2_name_2nd").textContent = player2;

};

//NOT USED!!
//let player1_choice_a, player1_choice_d, player2_choice_a, player2_choice_d;
// document.getElementById("player1_choice_a").onclick = player1_choice_a;
// document.getElementById("player1_choice_d").onclick = player1_choice_d;
// document.getElementById("player2_choice_a").onclick = player2_choice_a;
// document.getElementById("player2_choice_d").onclick = player2_choice_d;


//player1-attack
document.getElementById("player1_choice_a").onclick = function () {
    if (turn === "player1") {
        // Get the keys (attack values) from the dictionary
        let attackKeys = Object.keys(attacking_attacks);

        // Pick a random key
        let randomKey = attackKeys[Math.floor(Math.random() * attackKeys.length)];

        // Get the values (attaack values) from the dic...
        let attackvalues = Object.values(attacking_attacks)

        //pick a random value
        let randomValue = attackvalues[Math.floor(Math.random() * attackvalues.length)]
        
        //Game logic
        player2_hp -= Number(randomKey)
        player1_hp += randomValue

        //updating the HP <label> of both the players
        document.getElementById("player1_hp").textContent = player1_hp;
        document.getElementById("player2_hp").textContent = player2_hp;

        //Showing damage caused and HP gained
        document.getElementById("damage").textContent = randomKey;
        document.getElementById("hp_gained").textContent = randomValue
        

        // Switch turn
        turn = "player2";
        document.getElementById("turn").textContent = turn;

        //Ending condition
        if (player2_hp <= 0)
        {
            window.alert("Player 1 won")
        }
    }
};

// === PLAYER 1 DEFENSE ===
document.getElementById("player1_choice_d").onclick = function () {
    if (turn === "player1") {
        // Get the keys (attack values) from the dictionary
        let defenceKeys = Object.keys(defensive_attacks);

        // Pick a random key
        let randomKey = defenceKeys[Math.floor(Math.random() * defenceKeys.length)];

        // Get the values (attaack values) from the dic...
        let defencevalues = Object.values(defensive_attacks)

        //pick a random value
        let randomValue = defencevalues[Math.floor(Math.random() * defencevalues.length)]
        
        //Game logic
        player2_hp -= Number(randomKey)
        player1_hp += randomValue

        //updating the HP <label> of both the players
        document.getElementById("player1_hp").textContent = player1_hp;
        document.getElementById("player2_hp").textContent = player2_hp;

        //Showing damage caused and HP gained
        document.getElementById("damage").textContent = randomKey;
        document.getElementById("hp_gained").textContent = randomValue;

        // Switch turn
        turn = "player2";
        document.getElementById("turn").textContent = turn;

        //Ending condition
        if (player2_hp <= 0)
        {
            window.alert("Player 1 won")
        }
    }
};

// === PLAYER 2 ATTACK ===
document.getElementById("player2_choice_a").onclick = function () {
    if (turn === "player2") {
        // Get the keys (attack values) from the dictionary
        let attackKeys = Object.keys(attacking_attacks);

        // Pick a random key
        let randomKey = attackKeys[Math.floor(Math.random() * attackKeys.length)];

        // Get the values (attaack values) from the dic...
        let attackvalues = Object.values(attacking_attacks)

        //pick a random value
        let randomValue = attackvalues[Math.floor(Math.random() * attackvalues.length)]
        
        //Game logic
        player1_hp -= Number(randomKey)
        player2_hp += randomValue

        //updating the HP <label> of both the players
        document.getElementById("player1_hp").textContent = player1_hp;
        document.getElementById("player2_hp").textContent = player2_hp;

        //Showing damage caused and HP gained
        document.getElementById("damage").textContent = randomKey;
        document.getElementById("hp_gained").textContent = randomValue

        // Switch turn
        turn = "player1";
        document.getElementById("turn").textContent = turn;

        //Ending condition
        if (player1_hp <= 0)
        {
            window.alert("Player 2 won")
        }
    }
};

// === PLAYER 2 DEFENSE ===
document.getElementById("player2_choice_d").onclick = function () {
    if (turn === "player2") {
        // Get the keys (attack values) from the dictionary
        let defenceKeys = Object.keys(defensive_attacks);

        // Pick a random key
        let randomKey = defenceKeys[Math.floor(Math.random() * defenceKeys.length)];

        // Get the values (attaack values) from the dic...
        let defencevalues = Object.values(defensive_attacks)

        //pick a random value
        let randomValue = defencevalues[Math.floor(Math.random() * defencevalues.length)]
        
        //Game logic
        player1_hp -= Number(randomKey)
        player2_hp += randomValue

        //updating the HP <label> of both the players
        document.getElementById("player1_hp").textContent = player1_hp;
        document.getElementById("player2_hp").textContent = player2_hp;

        //Showing damage caused and HP gained
        document.getElementById("damage").textContent = randomKey;
        document.getElementById("hp_gained").textContent = randomValue

        // Switch turn
        turn = "player1";
        document.getElementById("turn").textContent = turn;

        //Ending condition
        if (player1_hp <= 0)
        {
            window.alert("Player 2 won")
        }
    }
};