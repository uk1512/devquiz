
if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark")
}
if(localStorage.getItem("theme") === "light"){
        document.body.classList.add("light")
}




const toggle = document.getElementById("toggle")

toggle.addEventListener("click", ()=> {
    document.body.classList.toggle("dark")
    document.body.classList.toggle("light")

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light")

})

const icons = {
    html:`
    <svg height="800px" width="800px" class="html-icon" viewBox="0 0 502.664 502.664">
                        <path style="fill:#f97316;" d="M153.821,358.226L0,274.337v-46.463l153.821-83.414v54.574L46.636,250.523l107.185,53.431
			                C153.821,303.954,153.821,358.226,153.821,358.226z"/>
		                <path style="fill:#f97316;" d="M180.094,387.584L282.103,115.08h32.227L212.084,387.584H180.094z"/>
		                <path style="fill:#f97316;" d="M348.843,358.226v-54.272l107.164-52.999l-107.164-52.59v-53.927l153.821,83.522v46.183
			                L348.843,358.226z"/>
                    </svg>`,
    css:`
    <svg width="800px" height="800px" viewBox="0 0 24 24" class="css-icon">
                        <path d="M5.75024 2C5.33603 2 5.00024 2.33579 5.00024 2.75V14.2505C5.00024 15.4932 6.0076 16.5005 7.25024 16.5005H9.5V19.5C9.5 20.8807 10.6193 22 12 22C13.3807 22 14.5 20.8807 14.5 19.5V16.5005H16.7502C17.9929 16.5005 19.0002 15.4932 19.0002 14.2505V2.75C19.0002 2.33579 18.6645 2 18.2502 2H5.75024ZM6.50024 11.0003V3.5H12.5V5.25154C12.5 5.66576 12.8358 6.00154 13.25 6.00154C13.6642 6.00154 14 5.66576 14 5.25154V3.5H15V6.25112C15 6.66534 15.3358 7.00112 15.75 7.00112C16.1642 7.00112 16.5 6.66534 16.5 6.25112V3.5H17.5002V11.0003H6.50024ZM6.50024 14.2505V12.5003H17.5002V14.2505C17.5002 14.6647 17.1645 15.0005 16.7502 15.0005H13.75C13.3358 15.0005 13 15.3363 13 15.7505V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V15.7505C11 15.3363 10.6642 15.0005 10.25 15.0005H7.25024C6.83603 15.0005 6.50024 14.6647 6.50024 14.2505Z" fill="#3b82f6"/>
                    </svg>`,
    js:` <svg width="800px" height="800px" class="js-icon" viewBox="0 0 16 16">
                        <path style="fill:#facc15;" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9 6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75 8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z"/>
                    </svg>`,
    accessibility:`<svg width="800px" height="800px" viewBox="0 0 24 24" class="access-icon">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 6C13.5 6.82843 12.8284 7.5 12 7.5C11.1716 7.5 10.5 6.82843 10.5 6C10.5 5.17157 11.1716 4.5 12 4.5C12.8284 4.5 13.5 5.17157 13.5 6ZM13.9844 8.25C14.6072 7.70029 15 6.89602 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 6.89602 9.39282 7.70029 10.0156 8.25H9.00002C8.80111 8.25 8.61034 8.32902 8.46969 8.46967L5.52299 11.4164C4.78644 12.1529 4.78645 13.3471 5.52299 14.0836C6.18667 14.7473 7.23737 14.822 7.98824 14.2588L8.4513 13.9115L7.0566 19.0254C6.78539 20.0199 7.53401 21 8.56478 21C9.08746 21 9.57555 20.7388 9.86549 20.3039L12.036 17.048L14.5885 20.4513C14.8475 20.7967 15.2541 21 15.6859 21C16.5905 21 17.2474 20.1399 17.0094 19.2673L15.5487 13.9115L16.0118 14.2588C16.7627 14.822 17.8134 14.7473 18.477 14.0836C19.2136 13.3471 19.2136 12.1529 18.477 11.4164L15.5303 8.46967C15.3897 8.32902 15.1989 8.25 15 8.25H13.9844ZM6.58365 12.477L9.31068 9.75H14.6894L17.4164 12.477C17.5671 12.6278 17.5671 12.8722 17.4164 13.023C17.2805 13.1588 17.0655 13.1741 16.9118 13.0588L14.7 11.4C14.4437 11.2078 14.0936 11.1996 13.8285 11.3796C13.5635 11.5597 13.4421 11.8882 13.5264 12.1973L15.3855 19.014L12.6 15.3C12.454 15.1053 12.2225 14.9935 11.9792 15.0003C11.7359 15.007 11.511 15.1315 11.376 15.334L8.61741 19.4718C8.60568 19.4894 8.58593 19.5 8.56478 19.5C8.52306 19.5 8.49277 19.4603 8.50375 19.4201L10.4736 12.1973C10.5579 11.8882 10.4365 11.5597 10.1715 11.3796C9.90648 11.1996 9.55634 11.2078 9.30002 11.4L7.08824 13.0588C6.93455 13.1741 6.71949 13.1588 6.58365 13.023C6.43289 12.8722 6.43289 12.6278 6.58365 12.477Z" fill="#a855f7"/>
                    </svg>`
}



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
    const questionNumberContainer = document.getElementById("question-number")
    questionNumberContainer.innerHTML = ""
    const questionNumber = document.createElement("span")
    questionNumber.innerText = `Question ${currentIndex + 1} of ${filteredQuestions.length}`
    questionNumberContainer.appendChild(questionNumber)

    const total = filteredQuestions.length

    let progressPercent = ((currentIndex+1)/total)*100
    document.getElementById("progress-fill").style.width = progressPercent + "%"
    


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
        textSpan.innerText = opt  

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
},2000)
}

function showResult() {
    document.getElementById("quiz-screen").classList.add("hidden")
    document.getElementById("result-screen").classList.remove("hidden")
    const resultName = document.getElementById("result-category-name")
    const resultIcon = document.getElementById("result-icon")

    if(selectedCategory === "js"){
        resultName.innerText = `JAVASCRIPT`
    }else{
        resultName.innerText = selectedCategory.toUpperCase()
    }

    resultIcon.innerHTML = icons[selectedCategory]

    resultIcon.classList.add(`${selectedCategory}-bg`)

    document.getElementById("score").innerText = score
    let totalQuestions = document.createElement("span")
    totalQuestions.classList.add("totalQuestions")
    totalQuestions.innerText = `Out of ${filteredQuestions.length}`
    const result = document.getElementById("result-screen-card")
    result.appendChild(totalQuestions)

    const finalMessage= document.createElement("span")
    let message = ""
    if(score>=8){
        confetti({
            particleCount: 120,
            spread: 70,
            origin: {y: 0.6}
        })
    }
    if(score >= 8) message = "🔥 Excellent!"
    else if(score >= 5) message = "👍 Good Job!"
    else message = "💡 Keep Practising!"
    finalMessage.innerText = message
    finalMessage.classList.add("message")
    result.appendChild(finalMessage)
}

function showQuizScreen() {
    document.getElementById("home-screen").classList.add("hidden")
    document.getElementById("quiz-screen").classList.remove("hidden")
}
function home(){
    document.getElementById("home-screen").classList.remove ("hidden") 
    document.getElementById("quiz-screen").classList.add("hidden")
    document.getElementById("result-screen").classList.add("hidden") 
}

