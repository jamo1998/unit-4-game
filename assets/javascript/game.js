$(document).ready(function () {
    //Declare a variable that returns a number between 19-120
    var luckyNumber;
    //Set value for tallied variables
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    var gem1;
    var gem2;
    var gem3;
    var gem4;

    //Creat new numbers function
    function newNumbers() {
        luckyNumber = Math.floor(Math.random() * 100) + 20;
        gem1 = Math.floor(Math.random() * 11 + 1);
        gem2 = Math.floor(Math.random() * 11 + 1);
        gem3 = Math.floor(Math.random() * 11 + 1);
        gem4 = Math.floor(Math.random() * 11 + 1);
    }


    //Create a reset function that resets current game data except wins/losses
    function newGame() {
        newNumbers();
        userTotal = 0;
        $("#lucky-number").text("Winning Number: " + luckyNumber);
        $("#score").text("Score: " + userTotal);
        $("#one").attr("data-gemvalue", gem1);
        $("#two").attr("data-gemvalue", gem2);
        $("#three").attr("data-gemvalue", gem3);
        $("#four").attr("data-gemvalue", gem4);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#win-or-lose").text("");
    }

    //Add win function
    function winner() {
        $("#win-or-lose").text("You win!");
        wins++;
        $("#wins").text("Wins: " + wins);
    }

    //Lose function
    function loser() {
        $("#win-or-lose").text("You lose!");
        losses++;
        $("#losses").text("Losses: " + losses);
    }

    newGame();

    //Setup click function for gems
    $("#one").on('click', function () {
        userTotal = userTotal + gem1;
        console.log(userTotal);
        $("#score").text("Your Score: " + userTotal);
        if (userTotal > luckyNumber) {
            loser();
        } else if (userTotal === luckyNumber) {
            winner();
        }
    });

    $("#two").on('click', function () {
        userTotal = userTotal + gem2;
        console.log(userTotal);
        $("#score").text("Your Score: " + userTotal);
        if (userTotal > luckyNumber) {
            loser();
        } else if (userTotal === luckyNumber) {
            winner();
        }
    });

    $("#three").on('click', function () {
        userTotal = userTotal + gem3;
        console.log(userTotal);
        $("#score").text("Your Score: " + userTotal);
        if (userTotal > luckyNumber) {
            loser();
        } else if (userTotal === luckyNumber) {
            winner();
        }
    });

    $("#four").on('click', function () {
        userTotal = userTotal + gem4;
        console.log(userTotal);
        $("#score").text("Your Score: " + userTotal);
        if (userTotal > luckyNumber) {
            loser();
        } else if (userTotal === luckyNumber) {
            winner();
        }
    });

    $("#btn").on("click", function() {
        newGame();
    });
});