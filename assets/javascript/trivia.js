$(document).ready(function onStart() {

//Trivia questions
var triviaQuestions = [
    {
        question: "What was the original name of Guns 'N Roses?",
        choices: ["Snakepit", "Reckless Road", "Hollywood Rose", "Troubadors"],
        answer : 2,
        photo :"assets/images/hollywoodrose.jpg"
    },
    {
        question: "Axl Rose is from?",
        choices: ["Indiana", "Illinois", "Idaho", "Ohio"],
        answer: 0,
        photo: "assets/images/youngaxl.jpg"
    },
    {
        question: "Slash's real name is?",
        choices: ["William Bailey", "Samuel Hudgens", "Michael Rose", "Saul Hudson"],
        answer: 3,
        photo: "assets/images/slash.jpg"
    },
    {
        question: "The song Welcome to the Jungle was written about what city?",
        choices: ["Los Angeles", "New York", "Chicago", "Detroit"],
        answer: 0,
        photo: "assets/images/losangeles.jpg"
    }
        
    ];

//Declared variables
var correct = 0;
var incorrect = 0;
var time;
var running = false;
var intervalId;
var clockRunning = false;
var slash = "assets/images/slashyoulose.gif";


    $("#reset").hide();

//main game start and reset
$(".start-button").on("click", function gameStart() {
    $(".final-standings").hide();
    $("p").hide();
    $(".start-button").hide();
    showQuestionAndAnswers(0);
});
//Time functions
function timerRun() {
    time = 10;
    if (!running) {
        intervalId = setInterval(decrement, 1000);
        running = true;
    }
}

function decrement() {
    time--;
    $(".timer").html("<h3>You have " + time + " seconds left!<h3");
    if (time === 0) {
        incorrect++
        stop();
        $(".incorrect").html("Incorrect: " + incorrect);
        //setTimeout(function () {showQuestionAndAnswers()}, 3000);
    }
}

function stop() {
    running = false;
    clearInterval(intervalId);
}


//Game functions and loops
function showQuestionAndAnswers(index) {
    $(".results").hide();
    $(".question-picked").show();
    $(".timer").show();
    timerRun();
    randomChoice = triviaQuestions[index];
    $(".question-picked").html("<h2>" + randomChoice.question + "</h2>");

//Game for loop
    for (var i= 0; i < randomChoice.choices.length; i++) {
        var playerChoice = $("<div>");
        playerChoice.addClass("player-choice");
        playerChoice.html(randomChoice.choices[i]);
        playerChoice.attr("data-guessvalue", i);
        $(".possible-answers").append(playerChoice);
    }

 //Player click functions/Wins and losses       
    $(".player-choice").on("click", function () {
            stop();
            playerGuess = parseInt($(this).attr("data-guessvalue"));
            if (playerGuess === randomChoice.answer) {
                correct++;
                $(".correct").html("Correct: " + correct);
                $(".results").html("<img src=" + randomChoice.photo +">");
                $(".results").show();
            }
            else {
                stop();
                incorrect++;
                $(".incorrect").html("Incorrect: " + incorrect);
                $(".results").html("<img src=" + slash + ">");
                $(".results").show();
            }
            if (index === triviaQuestions.length - 1){
                if(correct > 3){
                    $(".final-standings").html("Congrats, you got " + correct + " right!");
                    $(".final-standings").show();
                    $(".question-picked").hide();
                    $(".timer").hide();
                    $(".possible-answers").html("");
                    $("#reset").show();
                }
                else  {
                    $(".final-standings").html("Just a little Patience...try again");
                    $(".final-standings").show();
                    $(".question-picked").hide();
                    $(".timer").hide();
                    $(".possible-answers").html("");
                    $("#reset").show();
                }
            }
            else {
                $(".possible-answers").html("");
                $(".question-picked").hide();
                $(".timer").hide();
                setTimeout(function() {showQuestionAndAnswers(index+1)}, 3000);
            } 
        })
}   

//Game reset
    $("#reset").on("click", function gameStart() {
        correct = 0;
        incorrect = 0;
        $(".correct").html("Correct: " + correct);
        $(".incorrect").html("Incorrect: " + incorrect);
        $(".final-standings").hide();
        $("p").hide();
        $("#reset").hide();
        $(".possible-answers").empty();
        $(".question-picked").empty();
        showQuestionAndAnswers(0);
    });

}
)




//$("#reset").on("click", function gameStart() {
//  $(".incorrect").html("Incorrect: " + incorrect);
//    $(".correct").html("correct: " + correct);
 //   $(".final-standings").hide();
    //$("p").hide();
    //$("#reset").hide();
    //$(".possible-answers").html("");
   // $(".question-picked").html("");
   // showQuestionAndAnswers(0);
//});