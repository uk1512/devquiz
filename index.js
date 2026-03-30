if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark")
    }

const toggle = document.getElementById("toggle")

toggle.addEventListener("click", ()=> {
    document.body.classList.toggle("dark")

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light")

})

let questions = []

fetch("questions.json")
    .then(res => res.json())
    .then(data => {
        questions = data

        initApp()
    })

let currentIndex = 0
let score = 0
let selectedCategory = ""
let filteredQuestions= []
let answer = null

function initApp(){
    document.querySelectorAll(".categories > div").forEach(card => {
    card.addEventListener("click", ()=>{
        selectedCategory = card.id

        filteredQuestions = questions.filter(q=>q.category === selectedCategory)
        console.log(filteredQuestions)

        currentIndex = 0
        score = 0
        showQuizScreen()
        showQuestions()
    })
})
}


function showQuestions() {
    const q = filteredQuestions[currentIndex]
    answer = null


    document.getElementById("question").innerText = `${currentIndex+1 }. ${q.question}`
    const optionsContainer  = document.getElementById("options")
    optionsContainer.innerHTML = ""
    const submit = document.getElementById("submit")
    submit.innerHTML = ""

    q.options.forEach((opt,index)=>{
        const btn = document.createElement("button")
     
        btn.classList.add("option")
        const letters = ["A","B","C","D"]
        const letterSpan = document.createElement("span")
letterSpan.classList.add("option-letter")
letterSpan.innerText = letters[index]

const textSpan = document.createElement("span")
textSpan.classList.add("option-text")
textSpan.innerText = opt   // ✅ THIS FIXES IT

btn.appendChild(letterSpan)
btn.appendChild(textSpan)

        btn.addEventListener("click",()=>{
            answer = index
            document.querySelectorAll(".option").forEach(b=>{
                b.classList.remove("selected")
            })
            btn.classList.add("selected")
        })

        optionsContainer.appendChild(btn)
    })
    const submitbtn = document.createElement("button")
    submitbtn.textContent = "Submit Answer"
    submitbtn.classList.add("submit-btn")
    submit.appendChild(submitbtn)
    submitbtn.addEventListener("click",()=>{
        checkAnswer(answer)
    })
    
}

function checkAnswer(selected) {
    const correctIndex = filteredQuestions[currentIndex].answer
    const buttons = document.querySelectorAll(".option")

    buttons.forEach((btn,index)=>{
        btn.disabled = true
        if(index === correctIndex){
            btn.classList.add("correct")
        }
        if(index === selected && selected!== correctIndex ){
            btn.classList.add("wrong")
        }
    })
    if(selected === correctIndex){
            score++
    }
    setTimeout(()=>{
    currentIndex++
    if(currentIndex < filteredQuestions.length){
        showQuestions()
    }else{
        showResult()
    }
},3000)
}

function showResult() {
    document.getElementById("quiz-screen").style.display = "none"
    document.getElementById("result-screen").style.display = "block"

    document.getElementById("score").innerText = score
}

function showQuizScreen() {
    document.getElementById("home-screen").style.display = "none"
    document.getElementById("quiz-screen").style.display = "block"
}
function home(){
    document.getElementById("home-screen").style.display = "block"
    document.getElementById("quiz-screen").style.display = "none"
    document.getElementById("result-screen").style.display = "none"
}

