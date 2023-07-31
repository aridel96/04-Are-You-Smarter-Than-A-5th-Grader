// Creates a variable using var and assigns it to an HTML element with that Selector 
var startButton = document.querySelector(".button")
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector("#question")

var questions = {                                                     //questions object where the key is the question and the value is the answer
    "Inside which HTML element do we put the JavaScript?": "c",
    "What is the correct Javascript syntax to change the content of the HTML element <p id='demo'>This is a demonstration.</p>?": "d",
    "Where is the correct place to insert a Javascript?": "c",
    "What is the correct syntax for reffering to an external script called xxx.js": "b",
    "The external Javascript file must contain the <Script> tag?": "b",
    "How do you write 'Hello World' in an alert box?": "b",
    "How do you create a function in JavaScript?": "c",
    "How do you call a function named myFunction?": "b",
    "How do you write an if statement in Javascript?": "c",
    "How do you write an if statement for executing some code if 'i' is NOT equal to 5?": "a",
    "How does a WHILE loop start?": "a",
    "How does a FOR loop start?": "a",
    "How can you add a comment in a JavaScript?": "c",
    "How to insert a comment that has more than one line?": "c",
    "What is the correct way to write a JavaScript array?": "b",
    "How do you round the number 7.25, to the nearest integer?": "c",
    "How do you find the number with the highest value of x and y?": "c",
    "What is the correct JavaScript syntax for opening a new window called 'w2'?": "a",
    "JavaScript is the same as Java": "a",
    "How can you detect the client's browser name?": "c",
    "Which event occurs when the user clicks on an HTML element?": "d",
    "How do you declare a JavaScript variable?": "b",
    "Which operator is used to assign a value to a variable?": "a",
    "What will the following code return: Boolean(10 > 9) ?": "b",
    "Is JavaScript case sensitive?": "a"
}

var correctAnswer = {
    0: c,
    1: d,
    2: c,
    3: b,
    4: b,
    5: b,
    6: c,
    7: b,
    8: c,
    9: a,
    10: a,
    11: a,
}
var multipleChoice = {                                       //multiple choice options for questions array
    0: {
        a: "<javascript>",
        b: "<scripting>",
        c: "<script>",
        d: "<js>"
    },
    1: {
        a: "#demo.innerHTML = 'hello World!';",
        b: "document.getElementByName('p').innerHTML = 'Hello World!';",
        c: "document.getElement('p').innerHTML = 'Hello World!';",
        d: "document.getElementById('demo').innerHTML = 'Hello World!';"
    },
    2: {
        a: "The <body> section",
        b: "The <head> section",
        c: "Both the <head> section and the <body> section are correct"
    },
    3: {
        a: "<script name='xxx.js'>",
        b: "<script src='xxx.js'>",
        c: "<script href='xxx.js'>"
    },
    4: {
        a: "True",
        b: "False"
    },
    5: {
        a: "alertBox('Hello World');",
        b: "alert('Hello World');",
        c: "msg('Hello World');",
        d: "msgBox('Hello World');"
    },
    6: {
        a: "function:myFunction()",
        b: "function = myFunction()",
        c: "function myFunction()"
    },
    7: {
        a: "call function myFunction()",
        b: "myFunction()",
        c: "call myFunction()"
    },
    8: {
        a: "if i = 5",
        b: "if i = 5 then",
        c: "if (i == 5)",
        d: "if i == 5 then"
    },
    9: {
        a: "if (i != 5)",
        b: "if (i <> 5)",
        c: "if i <> 5",
        d: "if i =! 5 then"
    },
    10: {
        a: "while (i <= 10)",
        b: "while (i <= 10; i++",
        c: "while i = 1 to 10"
    },
    11: {
        a: "for (i = 0; i <= 5; i++)",
        b: "for (i <= 5; i++)",
        c: "for (i = 0; i <= 5)",
        d: "for i = 1 to 5"
    },
    12: {
        a: "'This is a comment",
        b: "<!--This is a comment-->",
        c: "//This is a comment"
    },
    13: {
        a: "<!--This comment has more than one line-->",
        b: "//This comment has more than one line//",
        c: "/*This comment has more than one line*/"
    },
    14: {
        a: "var colors = (1:'red', 2:'green', 3:'blue')",
        b: "var colors = ['red', 'green', 'blue']",
        c: "var colors = 'red', 'green', 'blue'",
        d: "var colors = 1 =('red'), 2 = ('green'), 3 = ('blue')"
    },
    15: {
        a: "Math.rnd(7.25)",
        b: "round(7.25)",
        c: "Math.round(7.25)",
        d: "rnd(7.25)"
    },
    16: {
        a: "top(x,y)",
        b: "ceil(x,y)",
        c: "Math.max(x,y)",
        d: "Math.ceil(x,y)"
    },
    17: {
        a: "w2 = window.open('http://www.myWebsite.com');",
        b: "w2 = window.new('http://www.myWebsite.com');"
    },
    18: {
        a: "False",
        b: "True"
    },
    19: {
        a: "browser.name",
        b: "client.navName",
        c: "navigator.appName"
    },
    20: {
        a: "onmouseover",
        b: "onmouseclick",
        c: "onchange",
        d: "onclick"
    },
    21: {
        a: "v carName",
        b: "var carName",
        c: "variable carName"
    },
    22: {
        a: "=",
        b: "*",
        c: "-",
        d: "X"
    },
    23: {
        a: "NaN",
        b: "true",
        c: "false"
    },
    24: {
        a: "Yes",
        b: "No"
    }
}

var answer                                              //Holds user answer   

var questionCount = 0
var correctCounter 
var decrementVal  //1 min
var wrong = true
var answers = multipleChoice[questionCount]                         //Returns the keys in the multipleChoice object. The keys have objects as a value



function beginQuiz() {                              //See README
    var time = 60;
    var timer = setInterval(function() {
        timerEl.textContent = time + " seconds left";
        time--                             //decrements time by 1

        quiz(questions, multipleChoice)
        // if(questionCount === questions.length || time === 0) {
        
        if(true) {
        clearInterval(timer)
        }
    }, 1000)
}



function quiz(questions, answers) {
    // PLAY SONG WHEN QUIZ BEGINS!
    
    //Print out question
    for (var quest in questions) {
        questionEl.textContent = quest
        
        //Display answers
        if ("a" in answers) {
            console.log("a")
            var choices = listA.textContent(answers.a)
            listA.appendChild(choices)
            listA.addEventListener("click", checkAnswer)
        }
        if (b in answers) {
            console.log("b")
            var choices = listB.innerHTML(answers[b])
            listB.appendChild(choices)
            listB.addEventListener("click", checkAnswer)
        }
        if (c in answers) {
            console.log("c")
            var choices = document.createTextNode(answers[c])
            listC.appendChild(choices)
            listC.addEventListener("click", checkAnswer)
        }
        if (d in answers) {
            console.log("d")
            var choices = document.createTextNode(answers[d])
            listD.appendChild(choices)
            listD.addEventListener("click", checkAnswer)
        }
        questionCount++
    }
}



function checkAnswer() {
    //Compare correct answer to user answer
    //Increment correctCounter or decrement timer if 
    //Call to clear timer
}



var listA = document.getElementById("a")
var listB = document.getElementById("b")
var listC = document.getElementById("c")
var listD = document.getElementById("d")

startButton.addEventListener("click", beginQuiz)