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
    var time = 20;
    var running = false;
    var intervalId;
    var clockRunning = false;
    var qHolder = [];

$("#play-again").hide();

for (i = 0; i < triviaQuestions.length; i++) {
    var holder = triviaQuestions[i];
    console.log(holder);
}

//main game start and reset
$(".start-button").on("click", function reset() {
    $("p").hide();
    $(".start-button").hide();
    function timerRun() {
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
        clearInterval(intervalId);
    }
    timerRun();
}
)
});