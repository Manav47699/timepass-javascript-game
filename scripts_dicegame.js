//This project is incomplete

let player1_points =0, player2_points=0;
let turn = "player1", roll;
let result, current_player;


function player1_roll()
{
    current_player = "player 1"
    let result1;
    result1 = Math.floor(Math.random() * 6) + 1;
    player1_points += result1
    result = result1;
    document.getElementById("player1_counter").textContent = player1_points
    if (player1_points >= 100)
    {
        window.alert("player 1 wins")
        
    }
}

function player2_roll()
{
    current_player = "player 2"
    let result2;
    result2 = Math.floor(Math.random() * 6) + 1;
    player2_points += result2
    result = result2
    document.getElementById("player2_counter").textContent = player2_points
    if (player2_points >= 100)
    {
        window.alert("player 2 wins")

    }
}


document.getElementById("roll").onclick = function ()
{
    
    if (turn == "player1") {
        player1_roll();
        turn = "player2"
    }
    else {
        player2_roll();
        turn = "player1"
    }
    document.getElementById("turn").textContent = turn;
    document.getElementById("result").textContent = `${current_player} got ${result}`;

}
    

