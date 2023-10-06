//storin questions
const questions = [
    {
        question:"Who is the President of Cameroon?",
        answers: [
            {text: "Paul Biya",correct:"True"},
            {text: "Daisy",correct:"false"},
            {text: "Amadhou Ahidjo",correct:"false"},
            {text: "None of the above",correct:"false"}
        ]
    },
    {
        question:"Which country annexed Cameroon?",
        answers: [
            {text: "Spain",correct:"false"},
            {text: "germany",correct:"True"},
            {text: "America",correct:"false"},
            {text: "China",correct:"false"}
        ]
    },
    {
        question:"When was Daisy born?",
        answers: [
            {text: "2005",correct:"false"},
            {text: "1995",correct:"false"},
            {text: "1884",correct:"false"},
            {text: "None of the above",correct:"True"}
        ]
    },
    {
        question:"Do you love Daisy?",
        answers: [
            {text: "No",correct:"false"},
            {text: "I doubt",correct:"false"},
            {text: "Definitely",correct:"True"},
            {text: "Maybe",correct:"false"}
        ]
    }
];

const questionElement = document.getElementById("Question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

//whenever we start quiz n give answers, the question number and score will be changx so
//lets add variables to store it

let currentIndex = 0;
let score = 0;

function startQuiz(){
    currentIndex = 0;
    score = 0;   //everythx is at zero
    nextButton.innerHTML = "Next"; //change text of button when person starts quiz
    showQuestion(); //activat fxn to go to the next question
}
        

function showQuestion(){
    resetState(); //to reset previous question and answer
    let currentQuestion = questions[currentIndex]; //store question at the index of the counter of questions 
    let questionNo = currentIndex + 1; //increment currentIndex
    questionElement.innerHTML = questionNo +  ". "+ currentQuestion.question; //change the question text with this

    //code to display answers

    currentQuestion.answers.forEach(answer => { //go to answers and dsiplay each text
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add('btn'); //give a class button to each text
        //classlist returns an array of all the classes in an element in which operations can be performed on the array
        answerButton.appendChild(button); //to display button inside answer-button div

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)

    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    } //this will remove previous answers
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "True";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(  //disable color/click after selectx one answer
    button =>{
        if(button.dataset.correct === "True"){ //checks if answer is true and adds the appropriate color if it is or isn't
            button.classList.add("correct");   //also stops you from bein able to choose another answer when you've selected
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = 'block';
};

function handleNextButton(){
    currentIndex++;
    if(currentIndex < questions.length){
        showQuestion();
    }else{
        showScore(); //for when we are at the end of the quiz
    }
}
nextButton.addEventListener("click",()=>{  //function to handle next button when we click on it
    if(currentIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()  //will restart quiz if questions are finish since the current Index
                    // will have been incremented to be more than the question number
    }
})
startQuiz();