const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'python',
     'correct':'a'
    },
    {
        'que': 'Who Discovered Gravity?',
        'a': 'Einstein',
        'b': 'Newton',
        'c': 'Archimedis',
        'd': 'Edison',
     'correct':'b'
    },
    {
        'que': 'Who is the Father of Computer?',
        'a': 'Charles Babbage',
        'b': 'Newton',
        'c': 'Einstein',
        'd': 'Edison',
     'correct':'a'
    },
    {
        'que': 'Where Computer process Data?',
        'a': 'CPU',
        'b': 'Monitor',
        'c': 'Mouse',
        'd': 'Keyboard',
     'correct':'a'
    },
    {
        'que': 'Which is a input device?',
        'a': 'Printer',
        'b': 'Monitor',
        'c': 'Mouse',
        'd': 'Speaker',
     'correct':'b'
    },
    {
        'que': 'Which is a output device?',
        'a': 'Keyboard',
        'b': 'Mouse',
        'c': 'Monitor',
        'd': 'Scanner',
     'correct':'c'
    }
]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    quesBox.innerText = ` ${index+1}) ${data.que}`;
   optionInputs[0].nextElementSibling.innerText = data.a;
   optionInputs[1].nextElementSibling.innerText = data.b;
   optionInputs[2].nextElementSibling.innerText = data.c;
   optionInputs[3].nextElementSibling.innerText = data.d;
  
}
const submitQuiz = () =>{
    const data = questions[index];
    
    const ans = getAnswer()
    console.log(ans, data.correct);
    if(ans == data.correct){
         right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
                
                
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML =` 
    <h3> Thank You</h3>
    <h2> ${right} / ${total} are correct</h2>`
}


loadQuestion();