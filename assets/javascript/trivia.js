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
   // var qHolder = [];

$("#play-again").hide();


//main game start and reset
$(".start-button").on("click", function reset() {
    $("p").hide();
    $(".start-button").hide();

    

    // for (i = 0; i < triviaQuestions.length; i++) {

    //     showQuestionAndAnswers(i);
    //     setTimeout(showQuestionAndAnswers(i), time);
    // }
    showQuestionAndAnswers(0);
    function showQuestionAndAnswers(index) {
        $(".results").hide();
        $(".question-picked").show();
        $(".timer").show();
        timerRun();
        randomChoice = triviaQuestions[index];
        $(".question-picked").html("<h2>" + randomChoice.question + "</h2>");
        //go over this again, still unclear
        for (var i= 0; i < randomChoice.choices.length; i++) {
            var playerChoice = $("<div>");
            playerChoice.addClass("player-choice");
            playerChoice.html(randomChoice.choices[i]);
            playerChoice.attr("data-guessvalue", i);
            $(".possible-answers").append(playerChoice);
        }
  
        $(".player-choice").on("click", function () {
            stop();
            playerGuess = parseInt($(this).attr("data-guessvalue"));
            if (playerGuess === randomChoice.answer) {
                $(".results").html("<img src=" + randomChoice.photo +">");
                $(".results").show();
                correct++;
            }
            else {
                incorrect++;
            }
            if (index == triviaQuestions.length - 1){
                if(correct > 2){
                    alert("Winner");
                }
                else (alert("You Lose"));
                $("#play-again").show()
                $("#play-again").on("click", onStart());
            }
            else {
                $(".possible-answers").html("");
                $(".question-picked").hide();
                $(".timer").hide();
                setTimeout(function() {showQuestionAndAnswers(index+1)}, 3000);
            }
            
        }
    );
    }

    function timerRun() {
        time = 20;
        if (!running){
        intervalId = setInterval(decrement, 1000);
        running = true;
        }
    }
    
    function decrement() {
        time--;
        $(".timer").html("<h3>You have "+ time + " seconds left!<h3");
        if (time === 0) {
            stop();
        }
    }
    
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
}
)
});