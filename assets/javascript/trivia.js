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
    },
    {
        question: "The album Appetite for Destruction was released in what year?",
        choices: ["1989", "1987", "1990", "1988"],
        answer: 1,
        photo: "assets/images/appetite.jpg"
    },
    {
        question: "The first number 1 hit that Guns 'N Roses had was which song?",
        choices: ["Paradise City", "Welcome to the Jungle", "Patience", "Sweet Child O' Mine"],
        answer: 3,
        photo: "assets/images/sweetchild.gif"
    },
    {
        question: "Which band member left due to being tired of the fame?",
        choices: ["Steven Adler", "Slash", "Gilbey Clark", "Izzy Stradlin"],
        answer: 3,
        photo: "assets/images/izzy.jpeg"
    },
    {
        question: "The preferred guitar used by Slash is the ",
        choices: ["Fender", "Ibanez", "Gibson", "Guild"],
        answer: 2,
        photo: "assets/images/gibson.jpg"
    },
    {
        question: "For which movie did Guns 'N Roses contribute a song to?",
        choices: ["Terminator 2", "Pulp Fiction", "Clerks", "Clueless"],
        answer: 0,
        photo: "assets/images/terminator.jpg"
    },
    {
        question: "Guns 'N Roses was inducted into the Rock n Roll Hall of Fame by which artist/group?",
        choices: ["Pearl Jam", "Black Sabbath", "Green Day", "Alice Cooper"],
        answer: 2,
        photo: "assets/images/greenday.jpg"
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

//Hidden reset button
$("#reset").hide();
$(".correct").hide();
$(".incorrect").hide();
//main game start and reset
$(".start-button").on("click", function gameStart() {
    $(".final-standings").hide();
    $("p").hide();
    $(".start-button").hide();
    $(".correct").show();
    $(".incorrect").show();
    showQuestionAndAnswers(0);
});

//Game functions and loops
function showQuestionAndAnswers(index) {

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
        setTimeout(function(){
            showQuestionAndAnswers(index+1)
            if (incorrect >= 5) {
                stop();
                $(".final-standings").html("Just a little Patience...try again");
                $(".final-standings").show();
                $(".question-picked").hide();
                $(".timer").hide();
                $(".possible-answers").html("");
                $(".results").html("<img src=" + slash + ">");
                $(".results").show();
                $("#reset").show();
            }}, 1000);
    } 
}

function stop() {
    running = false;
    clearInterval(intervalId);
}
//What is shown and hidden at Game start click
    $(".possible-answers").empty();
    $(".results").hide();
    $(".question-picked").show();
    $(".timer").show();
    timerRun();
    questionChoice = triviaQuestions[index];
    $(".question-picked").html("<h2>" + questionChoice.question + "</h2>");

//Game for loop and HTML print
    for (var i= 0; i < questionChoice.choices.length; i++) {
        var playerChoice = $("<div>");
        playerChoice.addClass("player-choice");
        playerChoice.html(questionChoice.choices[i]);
        playerChoice.attr("data-guessvalue", i);
        $(".possible-answers").append(playerChoice);
    }

 //Player click functions/Wins and losses       
    $(".player-choice").on("click", function () {
            stop();
            playerGuess = parseInt($(this).attr("data-guessvalue"));
            if (playerGuess === questionChoice.answer) {
                correct++;
                $(".correct").html("Correct: " + correct);
                $(".results").html("<img src=" + questionChoice.photo +">");
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
                if(correct >= 6){
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
})