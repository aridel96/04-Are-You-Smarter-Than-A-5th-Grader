// Creates a variable using var and assigns it to an HTML element with that Selector 
var startButton = document.querySelector(".button")
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector("#question")
var answersEl = document.getElementById("answers")
var correctImg = document.getElementById("correctImg")
var wrongImg = document.getElementById("wrongImg")
// var questionBox = document.getElementById("row3") width=600px

var answer                                              //Holds user answer   
var user

var quest
var choices 
var questionCount = 0
var correctCounter = 0
var decrementVal  //1 min
var wrong = 0
var counter = 1                 // counts if 2 questions have passed since each question is 30 seconds. This helps decrease timer displayed to users
var highScore = 0

var liA = document.getElementById("a")
var liB = document.getElementById("b")
var liC = document.getElementById("c")
var liD = document.getElementById("d")

liA.style.display = "none";
liB.style.display = "none";
liC.style.display = "none";
liD.style.display = "none";


var choiceA
var choiceB
var choiceC
var choiceD

var questions = [                                                     //questions array with objects inside
    {"question":"Inside which HTML element do we put the JavaScript?",
    "answer": "c"},
    {"question": "What is the correct Javascript syntax to change the content of the HTML element <p id='demo'>This is a demonstration.</p>?",
    "answer": "d"},
    {"question": "Where is the correct place to insert a Javascript?",
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
var time = 10;                     

function beginQuiz() { 
    startButton.style.display = "none" 

    timerEl.textContent = time + " minutes left";
    quiz(questions, multipleChoice)

    var timer = setInterval(function() {
        
        timerEl.textContent = time + " minutes left";

        liA.textContent = " "
        liB.textContent = " "
        liC.textContent = " "
        liD.textContent = " "    
    
        correctImg.style.display = "none"
        wrongImg.style.display = "none"

        quiz(questions, multipleChoice)

        //Call to clear timer
        if(questionCount === questions.length | time === 0) {           // If the user has answered all questions or the timer has run out clear the timer
            clearInterval(timer)

            liA.style.display = "none";
            liB.style.display = "none";
            liC.style.display = "none";
            liD.style.display = "none";

            questionEl.style.fontSize = "69%";
            questionEl.textContent = "Your Score Is: " + correctCounter + " Out Of 25!";

            user = prompt("Enter your initials: ");

            if (correctCounter > highScore) {                   
                highScore = correctCounter
                questionEl.textContent = "Congratulations on your high score!";
                
                localStorage.setItem('userName', 'user');               // Saves user's initials and new high score to localStorage
                localStorage.setItem('score', 'highScore');
            } else {
                localStorage.setItem('userName', 'user');
                localStorage.setItem('score', 'correctCounter');        // saves user's score to localStorage
            }

        }
    }, 30000)
}



function quiz(questions, multipleChoice) {
    alert("We've made it!")

    //Print out question
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
             liA.addEventListener("click", ansA)
        }

        if (choices === "b") {
            choiceB = multipleChoice[questionCount].b
            liB.textContent = choiceB
            liB.addEventListener("click", ansB)
        } 

        if (choices === "c") {
            choiceC = multipleChoice[questionCount].c
            liC.textContent = choiceC
            liC.addEventListener("click", ansC)
        } 

        if (choices === "d") {
            choiceD = multipleChoice[questionCount].d
            liD.textContent = choiceD
            liD.addEventListener("click", ansD)
        }
    }

    counter++
    if ((counter % 2) === 0) {                    // Checks to see if the counter is divisible by 2 - in other words has the setInterval function passed twice (1 minute) 
        time--
    }
    questionCount++
}



function ansA() {
    //Compare correct answer to user answer
    //Increment correctCounter or decrement timer if 

    if (correctAns === "a") {              // Displays "correct!" img and increase correct answer counter 
        liB.removeEventListener("click", beginQuiz);
        liC.removeEventListener("click", beginQuiz);
        liD.removeEventListener("click", beginQuiz);
        liA.removeEventListener("click", beginQuiz);

        correctImg.style.display = "flex";
        correctCounter++
        
        return correctCounter;

    } else{
        return wrongAns();
    }
}

function ansB() {
    if (correctAns === "b") {
        liA.removeEventListener("click", beginQuiz);
        liC.removeEventListener("click", beginQuiz);
        liD.removeEventListener("click", beginQuiz);             // Removes event listener so that the user doesn't keep selecting other options until the next question loads
        liB.removeEventListener("click", beginQuiz);

        correctImg.style.display = "flex";
        correctCounter++

        return correctCounter;

    } else if (correctAns !== "b"){
        return wrongAns();
    }
}

function ansC() {
    if (correctAns === "c") {
        liA.removeEventListener("click", beginQuiz);
        liB.removeEventListener("click", beginQuiz);
        liD.removeEventListener("click", beginQuiz);  
        liC.removeEventListener("click", beginQuiz);

        correctImg.style.display = "flex";
        correctCounter++

        return correctCounter;
 
    } else if (correctAns !== "c") {
        return wrongAns();
    }
}

function ansD() {
    if (correctAns === "d") {
        liA.removeEventListener("click", beginQuiz);
        liB.removeEventListener("click", beginQuiz);
        liC.removeEventListener("click", beginQuiz);
        liD.removeEventListener("click", beginQuiz);

        correctCounter++
        correctImg.style.display = "flex";  

        return correctCounter;

    } else {
        return wrongAns();
    }
}

function wrongAns() {
    wrongImg.style.display = "flex";        // Displays "Wrong answer" img and sets wrong to true
    time--
    return time
}

startButton.addEventListener("click", beginQuiz)

// On start the question is first displayed and 
// then the timer begins (1 min). If the user answers
// correctly the question is refreshed. If the user 
// answers wrong then 5 seconds are decremented. If
// the user has answered all questions OR if the timer 
// reaches 0 then the game is over and the user is presented
// text box to enter their initials and save their score



// var oneMinute = 0           // keeps count until reaching 60
// var twentyFiveMin = 25
// console.log(time)
// oneMinute++
// if (oneMinute === 60) {
//     oneMinute = 0
//     twentyFiveMin--
//     timerEl.textContent = twentyFiveMin + " minutes left";
// }



// TO DO:
    // Why isn't the EventListener removed when using removeEventListener? 
    
    // Display High Score