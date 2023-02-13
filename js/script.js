'use strict'
import { question } from "./word.js"


const startBTn = document.querySelector('.start'),
sectionOne = document.querySelector('.section--1'),
signUpBtn = document.querySelector('.move'),
theForm = document.querySelector('.form'),
theNameInput = document.querySelector('.name'),
theEmailInput = document.querySelector('.mail'),
thePasscodeInput = document.querySelector('.passcode'),
theNumberInput = document.querySelector('.numbe'),
NextBTn = document.querySelector('.next'),
thefirstStep = document.querySelector('.firstat'),
theSecondStep = document.querySelector('.emaildiv'),
theThirdtep = document.querySelector('.number'),
theFourthStep = document.querySelector('.psscode'),
theDoneBtn = document.querySelector('.one'),
theSkipBtn = document.querySelector('.skip'),
theuserName = document.querySelector('.user'),
continueBtn = document.querySelector('.continue'),
RulesOfTheGame = document.querySelector('.info_box'),
quitTheGame = document.querySelector('.quit'),
theTime = document.querySelector('.timer_sec'),
option_list = document.querySelector('.option_list'),
timeLine = document.querySelector('header .timer_line'),
theWiew = document.querySelector('.theview'),
overlay = document.querySelector('.overlay'),
theOutcome = document.querySelector('.outcome'),
messageBox = document.querySelector('.message'),
submitBtn = document.querySelector('.submit_btn'),
okayBtn = document.querySelector('.okay')




//THE OUTCOMES FUNCTION
const hiddenShowed = () => {
    overlay.classList.remove('hidden')
    theOutcome.classList.remove('hidden')
}


const theIntro = () => {
    sectionOne.classList.add('hidden')
    theForm.classList.remove('hidden')
}

startBTn.addEventListener('click', theIntro)
let score = 0

let que_count = 0
let que_num = 1

const showQuestions = (index) => {
    const que_text = document.querySelector('.que_text');
    const number = document.querySelector('.num')
    number.innerHTML = question[index].numb
    let que_tag = `<span>` +question[index].numb + `.` + question[index].queestion + `</span>`
    let option_tag = `<div class= "option"><span>` +question[index].options[0] + `</span></div>` 
                     + `<div class= "option"><span>` +question[index].options[1] + `</span></div>` 
                    + `<div class= "option"><span>` +question[index].options[2] + `</span></div>` 
                     +`<div class= "option"><span>` +question[index].options[3] + `</span></div>` 
    que_text.innerHTML = que_tag
    option_list.innerHTML = option_tag
    
//     for (let i = 0; i < tabs.length; i++) {
//         tabs[i].setAttribute("onclick", "optionSelected(this)")        
//     }
}

option_list.addEventListener('click', (e) => {
    const clicked = e.target.closest('.option')
    let userAns = clicked.textContent
    let correctAns = question[que_count].answer;
    let allOptions =option_list.children.length
  const tabs = option_list.querySelectorAll('.option')

    console.log(clicked, correctAns);
    if (userAns == correctAns) {
        clicked.style.backgroundColor = ` #cce5ff`
        console.log(`correct`);
        score++
    } else {
        clicked.style.backgroundColor = ` #721c24`
        console.log(`incorrect`);
        for (let i = 0; i < tabs.length; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct")
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].style.pointerEvents = `none`        
    }
})



showQuestions(0)

score

//THE TIMER
let timer = 0
theTime.textContent = `00`
const startLoseTimer = maxTime => {
     clearInterval(timer)
   timer = setInterval(function () {
      if(maxTime > 0) {
        maxTime--
        if (maxTime < 10) {
            return theTime.textContent =  `0` + maxTime
        }
       return theTime.textContent = maxTime

      }

        if (maxTime >= -1) {
            clearInterval(timer)
            hiddenShowed()
            messageBox.textContent = `Time Up!! You got a mark of ${score}` 
        }
    }, 1000)

}
const markBox = () => {
    score
    hiddenShowed()
    if (score <= 10) {
        messageBox.textContent = `Read more!!! you have a score of ${score}. `
    } else if(score >= 10) {
        messageBox.textContent = ` Good job you have a score of ${score}. `
    } else if (score >= 15 ) {
        messageBox.textContent = `Excellent you have a score of ${score}. `
    } else if(score === 20) {
        messageBox.textContent = `Congratulations you ace the test `
    }
}
const signUp = () => {
    if (thefirstStep && theNameInput.value) {
        thefirstStep.classList.add('hidden')
        theSecondStep.classList.remove('hidden')
     }
      if (theSecondStep && theEmailInput.value) {
        theSecondStep.classList.add('hidden')
        theThirdtep.classList.remove('hidden')
    } 
    if (theThirdtep && theNumberInput.value) {
        theThirdtep.classList.add('hidden')
            theFourthStep.classList.remove('hidden')
            NextBTn.classList.add('hidden')
            theSkipBtn.classList.add('hidden')
            theDoneBtn.classList.remove('hidden')
    }
}
NextBTn.addEventListener('click', signUp)
const doneMethod = () => {
    //THE NAME AND METHOD OF USERNAME
const user = {
    fname: theNameInput.value,
    email: theEmailInput.value,
    passcode: Number(thePasscodeInput.value),    
}
if (user.fname, user.email, user.passcode) {
    const passcodeUpdated = user.passcode  + Math.trunc(Math.random() * 1234) + 1
    const useName = user.fname.toLocaleUpperCase() .split(' ')[0]
    const userName = useName + passcodeUpdated
    theuserName.textContent = userName
    console.log(userName);
        theForm.classList.add('hidden')
        RulesOfTheGame.classList.remove('hidden')
} 
}
theDoneBtn.addEventListener('click', doneMethod)

const skipped = () => {
    theForm.classList.add('hidden')
    RulesOfTheGame.classList.remove('hidden')
}
signUpBtn.addEventListener('click', () => {
    theForm.classList.remove('hidden')
    sectionOne.classList.add('hidden')
    theWiew.classList.add('hidden')
})
continueBtn.addEventListener('click', () => {
    RulesOfTheGame.classList.add('hidden')
    theWiew.classList.remove('hidden')
    startLoseTimer(16)
}) 
quitTheGame.addEventListener('click', () => {
    RulesOfTheGame.classList.add('hidden')
    sectionOne.classList.remove('hidden')
})
theSkipBtn.addEventListener('click', skipped)


const nextBtn = document.querySelector('.next_btn')
const nextque = () => {
    if (que_count < question.length -1) {
        que_count++
        que_num++
        queCounter(que_num)
        showQuestions(que_count)
        startLoseTimer(16)
        startTimer(widthValue)
        clearInterval(counterLine)
    } else {
        console.log(`completed`);
    }
    if (que_num == 20) {
        nextBtn.classList.add('hidden')
        submitBtn.classList.remove('hidden')
    }
  
}
nextBtn.addEventListener('click', nextque)
const submitNow = () => {
    markBox()
}
submitBtn.addEventListener('click', submitNow)

const okayIGet = () => {
    overlay.classList.add('hidden')
    theOutcome.classList.add('hidden')
    theWiew.classList.add('hidden')
    sectionOne.classList.remove('hidden')
}
okayBtn.addEventListener('click', okayIGet)
const queCounter = (index) => {
    const bottomShowQuestion = document.querySelector('.total_que')
    let totalQuestionTag = `<span><p>` + index + `</p>of<p>` + question.length + `</p>Questions</span>`
    bottomShowQuestion.innerHTML = totalQuestionTag
}
queCounter(1)

//DONE