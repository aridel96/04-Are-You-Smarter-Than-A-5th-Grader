// Creates a variable using var and assigns it to an HTML element with that Selector 
var startButton = document.querySelector(".button")
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector("#question")
var answersEl = document.querySelector("#answers")
var questions = []       //questions array
var answers = []      //answers array
var questionCount = 0

function beginQuiz() {                              //See README
    var time = 60
    var timer = setInterval(function() {
        timerEl.textContent = time + " seconds left";

        if(questionCount === questions.length) {
            clearInterval(timer)
        }

        time--                             //decrements time by 1

    }, 1000)
}

startButton.addEventListener('click', beginQuiz)


// On start the question is first displayed and 
// then the timer begins (1 min). If the user answers
// correctly the question is refreshed. If the user 
// answers wrong then 5 seconds are decremented. If
// the user has answered all questions OR if the timer 
// reaches 0 then the game is over and the user is presented
// text box to enter their initials and save their score