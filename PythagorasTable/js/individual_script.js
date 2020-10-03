var answer = document.getElementById("answer");
var myDiv = document.getElementById("mainDiv");
var countInput = document.getElementById("nCount");
var number1,number2;
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
    if (e.code === 'Enter' && nTries>0){
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
        multString.textContent = number1.toString() + " X " + number2.toString() + " = ";
        answer.value="";
    }
}

function calculate(){
    if (Math.abs(answer.value - number1 * number2) < 0.0001){
        correctAnswers++;
    }else{
        wrongAnswers.push(number1.toString() + "*" + number2.toString() + "=" + (number1*number2).toString() + "("
        + answer.value.toString() + ")");
    }
}

function getRandomNumbers(){
    number1=getRandomInt(8)+2;
    number2=getRandomInt(8)+2;
    generateNumbers();
}
function generateNumbers(){
    var negativeNumbers=document.getElementById("negativeNumbers").checked;
    var decimalNumbers=document.getElementById("decimalNumbers").checked;

    var negativeRandom;
    var decimalRandom;

    
    if (negativeNumbers){
        if (Math.random() < 0.5){
            negativeRandom=true;
        } 
        else{
            negativeRandom=false;
        }
    }
    if (decimalNumbers){
        if (Math.random() < 0.5){
            decimalRandom=true;
        } 
        else{
            decimalRandom=false;
        }
    }
    if (decimalRandom) number1 = "0." + number1;
    if (negativeRandom) number1 = "-" + number1;
    
    
    if (negativeNumbers){
        if (Math.random() < 0.5){
            negativeRandom=true;
        } 
        else{
            negativeRandom=false;
        }
    }
    if (decimalNumbers){
        if (Math.random() < 0.5){
            decimalRandom=true;
        } 
        else{
            decimalRandom=false;
        }
    }
    if (decimalRandom) number2 = "0." + number2;
    if (negativeRandom) number2 = "-" + number2;
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
        multString.textContent = number1.toString() + " X " + number2.toString() + " = ";
        document.getElementById("startBtn").style.visibility="hidden";
    }
}
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}