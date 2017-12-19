$(document).ready(function onStart() {
    var triviaQuestions = [];
    var correct = 0;
    var incorrect = 0;
    var time = 20;
    var intervalId;
    var clockRunning = false;



reset();
function reset() {
    //$(".timer").on("click")
    function timerRun() {
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        time--;
        $(".timer").html("<h3>" + time + "<h3");
        if (time === 0) {
            stop();
        }
    }
    function stop() {
        clearInterval(intervalId);
    }
    timerRun();
}

});