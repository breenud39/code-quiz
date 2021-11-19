var questions = 
[
  {
    question: "Commonly used data types DO not include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "3. alerts"
  },
  {
    question: "The condition if / else statement is enclosed with ______",
    choices: ["1. quotes", "2. curly brackets", "3. paranthesis", "4. square brackets"],
    correctAnswer: "3. paranthesis"
  },
  {
    question: "Arrays in Javascript can be used to store ______",
    choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer: "4. all of the above"
  },
  {
    question: "String values must be be enclosed within _____ when being assigned to variables",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. paranthesis"],
    correctAnswer: "3. quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is",
    choices: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
    correctAnswer: "4. console.log"
  },
]

var quizButtonEl = document.querySelector("#startQuiz");
var startTimerEl = document.querySelector("#start-timer");
var promptArea = document.querySelector("#prompt-area");
var optionArea = document.querySelector("#options");
var questionB = document.querySelector("#questionB")

var questionIndex = 0;
var startTime = 76;
var timeLeft = document.querySelector("#timeLeft");
var time;
var score = 0;


function startQuiz()
{
  promptArea.innerHTML = "";
  startTimer()
  getQuestion()
}

function getQuestion() 
{
  if (questionIndex > questions.length -1 || startTime <= 0) 
  {
    endQuiz()
    return
  }
  promptArea.textContent =""
  optionArea.textContent=""
  var questionEl = document.createElement("h1")
  questionEl.textContent = questions[questionIndex].question
  promptArea.append(questionEl)

  for(var i = 0; i < questions[questionIndex].choices.length; i++) 
  {
    var choice = document.createElement("li");
    choice.setAttribute("id","questionB", questions[questionIndex].choices[i])
    choice.textContent = questions[questionIndex].choices[i]
    optionArea.append(choice)

    choice.addEventListener("click", function(event) 
    {
      if (event.target.id === questions[questionIndex].correctAnswer) 
      {
        console.log("correct")
        score += 20;
      } 
      else 
      {
        console.log("incorrect")
        startTime -= 20;
      }
      questionIndex++
      getQuestion()
    })
  }

}

function startTimer()
{
    time = setInterval(function()
    {
      startTime--;
      timeLeft.textContent = " " + startTime;
      console.log(startTime);
      if(startTime <= 0)
      {
        clearInterval(time);
        startTime = 0;
        timeLeft.textContent = " " + startTime;
        endQuiz();
      }
    }, 1000);
}

function endQuiz()
{
  clearInterval(time);
  console.log(startTime);
  promptArea.innerHTML = "";
  optionArea.innerHTML = "";
  var finishedTitle = document.createElement("h1");
  var finalScore = document.createElement("p");
  var score = time;
  finishedTitle.textContent="All done!";
  finalScore.textContent = "Your final score is " + score;
  promptArea.append(finishedTitle, finalScore);

  highscore()
}

 function highscore()
{

//   var highscoreTitle = document.createElement("h1");
//   highscoreTitle.textContent="High scores";
//   promptArea.append(highscoreTitle);
}



quizButtonEl.addEventListener("click", startQuiz)