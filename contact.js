const contactForm = document.querySelector('.form-container');
const contactButton = document.getElementById('kontakt');
const start = document.querySelector('.start');

const main = document.getElementById('main');

contactButton.addEventListener('click', () => {
  contactForm.classList.add('show');                    //otwarcie formularza do kontaktu 
  main.style.filter = "blur(5px)";
});

const exit = document.querySelector('.fa-times-circle');

exit.addEventListener('click', () => {
  contactForm.classList.remove('show');              //zamknięcie formularza
  main.style.filter = "blur(0)";
})


const labels = document.querySelectorAll(".form-control label");

labels.forEach(label => {
    label.innerHTML = label.innerText.split("").map((letter, idx) => `<span style="transition-delay: ${idx * 40}ms">${letter}</span>`).join("");      //animacja w formularzu
});

//wysyłanie formularza

const startButton = document.getElementById('start-btn');
const containerElement = document.querySelector('.container');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

const send = document.getElementById('send');

send.addEventListener('click', () => {
  if(document.forms['kontakt']['imie'].value == '' || document.forms['kontakt']['nazwisko'].value == '' || document.forms['kontakt']['email'].value == '' || document.forms['kontakt']['tel'].value == '') {
    alert('Musisz wprowadzić dane!');
  } else {
    containerElement.classList.remove('hide');
  }
});

const questions = [
  {
    question: 'Ile lat ma Adele?',
    answers: [
      { text: '34', correct: true },
      { text: '123', correct: false }
    ]
  },
  {
    question: 'Który z tych artystów żyje i ma się dobrze?',
    answers: [
      { text: 'Adele', correct: true },
      { text: 'Michael Jackson', correct: false },
      { text: 'David Bowie', correct: false },
      { text: 'Freddy Mercury', correct: false }
    ]
  },
  {
    question: 'Która z tych piosenek to utwór Adele?',
    answers: [
      { text: 'Summer', correct: false },
      { text: 'Hello', correct: true },
      { text: 'Enter Sandman', correct: false },
      { text: 'Psychosocial', correct: false }
    ]
  },
  {
    question: 'Czy Adele jest Polką?',
    answers: [
      { text: 'Tak', correct: false },
      { text: 'Nie', correct: true }
    ]
  }
]

function startGame() 
{
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function showQuestion(question) 
{
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  })
}