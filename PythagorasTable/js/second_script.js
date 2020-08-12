var answer = document.getElementById("answer");
var myDiv = document.getElementById("mainDiv");
var countInput = document.getElementById("nCount");
var int1,int2;
var nCount;
var nTries;
var answerBox = document.getElementById("answerP");
var correctAnswers=0;
var multString = document.getElementById("stringP");
var wrongAnswersBox = document.getElementById("wrongAnswers");

var stopwatch = document.getElementById("stopwatch");
var timer = new Stopwatch(stopwatch);

var wrongAnswers = [];

answer.addEventListener("keydown", function (e) {
    if (e.keyCode === 13 && nTries>0){
        next();
        nTries--;
        if (nTries == 0){
            timer.stop();
            timer.showTime();
            answerBox.textContent = correctAnswers.toString() + " / " + nCount.toString() + " правильных ответов";
            countInput.value=nCount.toString();
            for(var i=0;i<wrongAnswers.length;i++){
                wrongAnswersBox.textContent += wrongAnswers[i] + "|";
            }
        }else{
            countInput.value=nTries.toString();
        }
    }
    
});

function next(){
    calculate();
    if (nTries==1){
        multString.textContent = "* X * =";
        answer.value="";
        document.getElementById("startBtn").style.visibility="visible";
        document.getElementById("startBtn").value="Начать заново";
    }else{
        getRandomNumbers();
        multString.textContent = int1.toString() + " X " + int2.toString() + " = ";
        answer.value="";
    }
}

function calculate(){
    if (answer.value == int1 * int2){
        correctAnswers++;
    }else{
        wrongAnswers.push(int1.toString() + "*" + int2.toString() + "=" + (int1*int2).toString() + "("
        + answer.value.toString() + ")");
    }
}

function getRandomNumbers(){
    int1=getRandomInt(8)+2;
    int2=getRandomInt(8)+2;
}

function start(){
    correctAnswers=0;
    wrongAnswers = [];
    nCount=countInput.value;
    wrongAnswersBox.textContent = "";
    if (nCount>0){
        timer.reset();
        timer.start();
        nTries=nCount;
        getRandomNumbers();
        multString.textContent = int1.toString() + " X " + int2.toString() + " = ";
        document.getElementById("startBtn").style.visibility="hidden";
    }
}
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}