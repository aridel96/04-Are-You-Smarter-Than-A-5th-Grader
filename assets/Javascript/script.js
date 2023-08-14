// Creates a variable using var and assigns it to an HTML element with that Selector 
var startButton = document.querySelector(".button")
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector("#question")
var answersEl = document.getElementById("answers")
var correctImg = document.getElementById("correctImg")
var wrongImg = document.getElementById("wrongImg")
var scoreButton = document.querySelector(".scores")
var viewHigh = document.getElementById("high-score")

var user = localStorage.getItem("userName")

var quest
var questionCount = 0
var correctCounter = 0
var highScore = localStorage.getItem("highestScore")

var liA = document.getElementById("a")
var liB = document.getElementById("b")
var liC = document.getElementById("c")
var liD = document.getElementById("d")

var choiceA
var choiceB
var choiceC
var choiceD

var timer

var questions = [                                                     //questions array with objects inside
    {"question":"Inside which HTML element do we put the JavaScript?",
    "answer": "c"},
    {"question": "What is the correct Javascript syntax to change the content of the HTML element <p id='demo'>This is a demonstration.</p>?",
    "answer": "d"},
    {"question": "Where is the correct place to insert a Javascript file?",
    "answer": "c"},
    {"question": "What is the correct syntax for reffering to an external script called xxx.js",
    "answer": "b"},
    // {"question": "The external Javascript file must contain the <Script> tag?", //R
    // "answer": "b"},
    {"question": "How do you write 'Hello World' in an alert box?",
    "answer": "b"},
    {"question": "How do you create a function in JavaScript?",
    "answer": "c"},
    {"question": "How do you call a function named myFunction?",
    "answer": "b"},
    {"question": "How do you write an if statement in Javascript?",
    "answer": "c"},
    {"question": "How do you write an if statement for executing some code if 'i' is NOT equal to 5?",
    "answer": "a"},
    {"question": "How does a WHILE loop start?",
    "answer": "a"},
    {"question": "How does a FOR loop start?",
    "answer": "a"},
    {"question": "How can you add a comment in a JavaScript?",
    "answer": "c"},
    // {"question": "How to insert a comment that has more than one line?", //R
    // "answer": "b"},
    {"question": "What is the correct way to write a JavaScript array?",
    "answer": "b"},
    {"question": "How do you round the number 7.25, to the nearest integer?",
    "answer": "c"},
    {"question": "How do you find the number with the highest value of x and y?",
    "answer": "c"},
    // {"question": "What is the correct JavaScript syntax for opening a new window called 'w2'?", //R
    // "answer": "a"},
    {"question": "JavaScript is the same as Java",
    "answer": "a"},
    // {"question": "How can you detect the client's browser name?", //R
    // "answer": "c"},
    // {"question": "Which event occurs when the user clicks on an HTML element?",  //R
    // "answer": "d"},
    {"question": "How do you declare a JavaScript variable?",
    "answer": "b"},
    {"question": "Which operator is used to assign a value to a variable?",
    "answer": "a"},
    {"question": "What will the following code return: Boolean(10 > 9) ?",
    "answer": "b"},
    {"question": "Is JavaScript case sensitive?",
    "answer": "a"}
]

var multipleChoice = [                                       //multiple choice options for questions array
    {
        a: "<javascript>",
        b: "<scripting>",
        c: "<script>",
        d: "<js>"
    },
    {
        a: "#demo.innerHTML = 'hello World!';",
        b: "document.getElementByName('p').innerHTML = 'Hello World!';",
        c: "document.getElement('p').innerHTML = 'Hello World!';",
        d: "document.getElementById('demo').innerHTML = 'Hello World!';"
    },
    {
        a: "The <body> section",
        b: "The <head> section",
        c: "Both the <head> section and the <body> section are correct"
    },
    {
        a: "<script name='xxx.js'>",
        b: "<script src='xxx.js'>",
        c: "<script href='xxx.js'>"
    },
    // {
    //     a: "True",
    //     b: "False"
    // },
    {
         a: "alertBox('Hello World');",
         b: "alert('Hello World');",
         c: "msg('Hello World');",
         d: "msgBox('Hello World');"
    },
    {
        a: "function:myFunction()",
        b: "function = myFunction()",
        c: "function myFunction()"
    },
    {
        a: "call function myFunction()",
        b: "myFunction()",
        c: "call myFunction()"
    },
    {
        a: "if i = 5",
        b: "if i = 5 then",
        c: "if (i == 5)",
        d: "if i == 5 then"
    },
    {
        a: "if (i != 5)",
        b: "if (i <> 5)",
        c: "if i <> 5",
        d: "if i =! 5 then"
    },
    {
        a: "while (i <= 10)",
        b: "while (i <= 10; i++",
        c: "while i = 1 to 10"
    },
    {
        a: "for (i = 0; i <= 5; i++)",
        b: "for (i <= 5; i++)",
        c: "for (i = 0; i <= 5)",
        d: "for i = 1 to 5"
    },
    {
        a: "'This is a comment",
        b: "<!--This is a comment-->",
        c: "//This is a comment"
    },
    {
        a: "<!--This comment has more than one line-->",
        b: "//This comment has more than one line//",
        c: "/*This comment has more than one line*/"
    },
    // {
    //     a: "var colors = (1:'red', 2:'green', 3:'blue')",
    //     b: "var colors = ['red', 'green', 'blue']",
    //     c: "var colors = 'red', 'green', 'blue'",
    //     d: "var colors = 1 =('red'), 2 = ('green'), 3 = ('blue')"
    // },
    {
        a: "Math.rnd(7.25)",
        b: "round(7.25)",
        c: "Math.round(7.25)",
        d: "rnd(7.25)"
    },
    {
        a: "top(x,y)",
        b: "ceil(x,y)",
        c: "Math.max(x,y)",
        d: "Math.ceil(x,y)"
    },
    // {
    //     a: "w2 = window.open('http://www.myWebsite.com');",
    //     b: "w2 = window.new('http://www.myWebsite.com');"
    // },
    {
        a: "False",
        b: "True"
    },
    // {
    //     a: "browser.name",
    //     b: "client.navName",
    //     c: "navigator.appName"
    // },
    // {
    //     a: "onmouseover",
    //     b: "onmouseclick",
    //     c: "onchange",
    //     d: "onclick"
    // },
    {
        a: "v carName",
        b: "var carName",
        c: "variable carName"
    },
    {
        a: "=",
        b: "*",
        c: "-",
        d: "X"
    },
    {
        a: "NaN",
        b: "true",
        c: "false"
    },
    {
        a: "Yes",
        b: "No"
    }
]

var correctAns
var time = 3;         



function clearQuiz() {
    //Call to clear timer
    if(time === 0 || questionCount === questions.length) {           // If the user has answered all questions or the timer has run out clear the timer
        clearInterval(timer)
    
        liA.style.display = "none";
        liB.style.display = "none";
        liC.style.display = "none";
        liD.style.display = "none";
    
        questionEl.style.fontSize = "69%";
        questionEl.textContent = "Your Score Is: " + correctCounter + " Out Of 20!";
    
        if (correctCounter >= highScore) {       
            user = prompt("Enter your initials: ");
                
            highScore = correctCounter
            questionEl.textContent = "Congratulations on your high score!";
                
            localStorage.setItem('userName', user);               // Saves user's initials and new high score to localStorage
            localStorage.setItem('highestScore', highScore);
        }
    }
}



function beginQuiz() { 
    startButton.style.display = "none" 

    liA.style.display = "none";
    liB.style.display = "none";
    liC.style.display = "none";
    liD.style.display = "none";

    timerEl.textContent = time + " minutes left";
    quiz(questions, multipleChoice)
}



timer = setInterval(function() {                        // setInterval function for Timer. Decreases and displays time every 60 seconds
    time--
    clearQuiz()

    timerEl.textContent = time + " minutes left";
}, 60000)



function nextQuestion() {
    liA.textContent = " "                       // Clears list items or answer choices
    liB.textContent = " "
    liC.textContent = " "
    liD.textContent = " "    

    correctImg.style.display = "none"           // Clears images
    wrongImg.style.display = "none"

    clearQuiz()
    quiz(questions, multipleChoice)
}



function quiz(questions, multipleChoice) {
    clearQuiz()

    //Print out question
    if (questionCount < questions.length) {
        quest = questions[questionCount].question
        questionEl.textContent = quest
        correctAns = questions[questionCount].answer
    
        liA.style.display = "list-item"     
        liB.style.display = "list-item"                        
        liC.style.display = "list-item"                        
        liD.style.display = "list-item" 
    
        for (var choices in multipleChoice[questionCount]) {
            // //Display answer choices
             if (choices === "a") {
                 choiceA = multipleChoice[questionCount].a
                 liA.textContent = choiceA
            }
    
            if (choices === "b") {
                choiceB = multipleChoice[questionCount].b
                liB.textContent = choiceB
            } 
    
            if (choices === "c") {
                choiceC = multipleChoice[questionCount].c
                liC.textContent = choiceC
            } 
    
            if (choices === "d") {
                choiceD = multipleChoice[questionCount].d
                liD.textContent = choiceD
            }
        }
    }
    questionCount++
}



function ans(letter) {
    //Compare correct answer to user answer
    //Increment correctCounter if correct or decrement timer if wrong

    if (correctAns === letter) {              // Displays "correct!" img and increase correct answer counter 
        correctImg.style.display = "flex";
        correctCounter++

        var delay = setInterval(function(){
            // console.log("Loading image before calling next question")
            
        }, 2000)

        nextQuestion()
    } else{
        // wrongAns()                              // Calls wrongAns and then loads next question

        var delay = setInterval(function(){
            // console.log("Loading image before calling next question")
            
        }, 2000)

        return wrongAns()
    }

    clearInterval(delay)
    return correctCounter;
}

function wrongAns() {
    wrongImg.style.display = "flex";        // Displays "Wrong answer" img and sets wrong to true

    time--
    timerEl.textContent = time + " minutes left";
    
    if (time === 0) {
        return clearQuiz()
    }

    nextQuestion()

    // return time
}



function viewScores() {
    viewHigh.style.display = "flex";
    viewHigh.style.justifyContent = "flex-end";
    viewHigh.style.alignItems = "center";
    viewHigh.style.fontSize = "69%";
    scoreButton.textContent = " "
    viewHigh.textContent = user + ": " + highScore;
}



startButton.addEventListener("click", beginQuiz)

scoreButton.addEventListener("click", viewScores)

liA.addEventListener("click", function(){
    ans("a")
 })

 liB.addEventListener("click",  function(){
    ans("b")
 })

 liC.addEventListener("click",  function(){
    ans("c")
 })

 liD.addEventListener("click",  function(){
    ans("d")
 })

// On start the question is first displayed and 
// then the timer begins (1 min). If the user answers
// correctly the question is refreshed. If the user 
// answers wrong then 5 seconds are decremented. If
// the user has answered all questions OR if the timer 
// reaches 0 then the game is over and the user is presented
// text box to enter their initials and save their score

// To Do:
// correct or wrong img aren't displaying