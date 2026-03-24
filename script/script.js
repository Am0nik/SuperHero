const mainSection = document.getElementById('main') //часть контента, туда все завернуто
const questions = [
    {
        question: "Какая основная черта героя?",
        answers: ["Одиночество", "Веселье", "Лень"],
        correctIndex: 0 // индекс это правильный ответ
    },
    {
        question: "Что он контролирует лучше всего?",
        answers: ["Свои деньги", "Свой гнев", "Чужие мысли"],
        correctIndex: 1
    },
    {
        question: "Как он относится к целям?",
        answers: [
            "Легко отказывается от них",
            "Идет на уступки ради важной цели",
            "Игнорирует цели"
        ],
        correctIndex: 1
    },
    {
        question: "Какая у него память?",
        answers: [
            "Плохая",
            "Средняя",
            "Отличная, помнит слова людей спустя годы"
        ],
        correctIndex: 2
    },
    {
        question: "Каким было его детство?",
        answers: [
            "Полным внимания",
            "Недостаток внимания",
            "Очень строгим"
        ],
        correctIndex: 1
    },
    {
        question: "Как он относится к людям?",
        answers: [
            "Доверяет всем",
            "Не подпускает никого, кроме близких",
            "Любит новые знакомства"
        ],
        correctIndex: 1
    },
    {
        question: "Как он предпочитает выполнять дела?",
        answers: [
            "В команде",
            "Делегирует другим",
            "Делает всё сам"
        ],
        correctIndex: 2
    },
    {
        question: "Почему он делает всё сам?",
        answers: [
            "Не умеет работать в команде",
            "Считает, что сам сделает лучше",
            "Боится людей"
        ],
        correctIndex: 1
    }
]//Вопросы для теста


const el = document.querySelector('.typing');
const length = el.textContent.length; 
el.style.animationTimingFunction = `steps(${length}, end)`;
el.style.width = `${length}ch`; 

const learnMoreBtn = document.getElementById('learn-more-btn-hero')
const heroSection = document.getElementById('heroSection');
learnMoreBtn.addEventListener('click', () => {
    heroSection.scrollIntoView();
})


const similarityTestBtn = document.getElementById('similarity-test-btn')
const similarityTestModal = document.getElementById('similarity-modal-window')

similarityTestBtn.addEventListener('click', () => {
    similarityTestModal.style.display = 'block'
    mainSection.style.filter = 'blur(5px)'
    console.log('open')
})

const closeSimilarityModalBtn = document.getElementById('close-similarity-modal-btn')
closeSimilarityModalBtn.addEventListener('click', () => {
    similarityTestModal.style.display = 'none'
    mainSection.style.filter = 'none'
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('start-container').style.display = 'block';
    console.log('close')
})


let currentQuestionIndex = 0
let score = 0

function startTest() {
    currentQuestionIndex = 0
    score = 0
    document.getElementById('start-container').style.display = 'none'
    document.getElementById('question-container').style.display = 'block'
    showQuestion()
}

function showQuestion() {
    const q = questions[currentQuestionIndex]
    document.getElementById('question-text').innerText = q.question
    const buttons = document.querySelectorAll('.answer-btn')
    buttons.forEach((btn, index) => {
        btn.innerText = q.answers[index]
        btn.onclick = () => {
            if (index === q.correctIndex) {
                score++
            }
            nextQuestion()
        }
    })
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showResults()
    }
}

function showResults() {
    document.getElementById('question-container').style.display = 'none'
    document.getElementById('result-container').style.display = 'block'
    document.getElementById('result-score').innerHTML = 
        `<b>Правильных ответов: ${score} из ${questions.length}</b>`
    if (score <= 3) {
        document.getElementById('result-message').innerText = 'Вы не очень похожи на нашего героя, но это не плохо, у всех свои сильные стороны!'
    } else if (score <= 6) {
        document.getElementById('result-message').innerText = 'Вы довольно похожи на нашего героя, у вас есть много общих черт!'
    } else {
        document.getElementById('result-message').innerText = 'Вы очень похожи на нашего героя, у вас много общих черт и качеств!'
    }
}

document.getElementById('start-similarity-modal-btn').onclick = startTest



function interacStory() {
    const interactiveModal = document.getElementById('ToInteractive')
    interactiveModal.style.display = 'block'
    mainSection.style.filter = 'blur(5px)'
    const closeInteractiveModalBtn = document.getElementById('close-interactive-modal-btn')
    closeInteractiveModalBtn.onclick = () => {
        interactiveModal.style.display = 'none'
        mainSection.style.filter = 'none'
    }
    const openToStoryBtn = document.getElementById('open-to-story-btn')
    openToStoryBtn.onclick = () => {
        window.location.href = "makeStory.html"
    }
}
