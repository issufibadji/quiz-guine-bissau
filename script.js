const quizData = [{
        question: "Quando foi a independência da Guiné-Bissau ?",
        a: "25 de maio de 1973",
        b: "24 de setembro de 1973",
        c: "14 de dezembro de 1969",
        d: "10 de setembro de 1974",
        correct: "d",
    },
    {
        question: "Quem foi o primeiro presidente da República de Guiné-Bissau ?",
        a: "Amilcar Cabral",
        b: "Luiz Cabral",
        d: "Kuma Iala",
        correct: "b",
    },
    {
        question: "Qual oceano fica a oeste da Guiné-Bissau?",
        a: "Índico",
        b: "Pacífico",
        c: "Ártico",
        d: "Atlântico",
        correct: "d",
    },
    {
        question: " Qual arquipélago faz parte da Guiné-Bissau ?",
        a: "Bijagós",
        b: "Sulu",
        c: "Galápagos",
        d: "Osumi",
        correct: "a",
    },
    {
        question: "Quem foi que descobriu a Guiné-bissau ?",
        a: "Cristóvão colombo",
        b: "Dinis Dias",
        c: "Álvaro Fernandes",
        d: "Nuno Tristão",
        correct: "d",
    },
    {
        question: "Analise a validade das afrimações abaixo sobre Guiné-Bissau e assinale a alternativa ERRADA?",
        a: "Guiné-Bissau é um país da costa ocidental da África que se estende desde o cabo Roxo até à ponta Cagete.",
        b: "Foi a primeira colónia portuguesa no continente africano a ter a independência reconhecida por Portugal em 24 de Setembro de 1973. Sua capital é Bissau.",
        c: "O clima do país é tropical e possui apenas duas estações a quente e a chuvosa.",
        d: "A música popular tradicional na região é o gumbé.",
        correct: "b",
    },
    {
        question: "Quem foi o presidente da Guiné-Bissau em 2004 ?",
        a: "Henrique Pereira Rosa",
        b: "Kumba Iala",
        c: "Verissimo Correia Seabra",
        d: "Carlos Gomes Junior",
        correct: "a",
    },
    {
        question: "Qual país fica ao norte da Guiné-Bissau ?",
        a: "Senegal",
        b: "Argélia",
        c: "Guiné-conacri",
        d: "Cabo-Verde",
        correct: "b",
    },
    {
        question: "Quem foi o primeiro-ministro da Guiné-Bissau em 1993 ?",
        a: "Kumba Iala",
        b: "Henrique Pereira Rosa",
        c: "Carlos Correia",
        d: "Joao da Costa",
        correct: "c",
    },
    {
        question: "Quem liderou a luta armada pela independência da Guiné-Bissau em 1961-1974 ?",
        a: "Agostinho Neto",
        b: "Amilcar Cabral",
        c: "Luiz Cabral",
        d: "Joao Tixeira Pinto",
        correct: "b",
    },
    {
        question: "Quantos cor tem a bandeira da Guiné-Bissau?",
        a: "Dois",
        b: "Três",
        c: "Quatro",
        d: "Cinco",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score
            }/${quizData.length
            } questions correctly</h2>

                <button onclick="location.reload()">recarregar</button>
            `
        }
    }
})