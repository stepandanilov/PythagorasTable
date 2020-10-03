var startBool=false;
var nCorrect = 0;
var timer = document.getElementById("timer");
var watch = new Stopwatch(timer);


document.getElementById("endBtn").style.visibility="hidden";
document.getElementById("restartBtn").style.visibility="hidden";


function start(){
    StartBool = true;
    watch.start();
    document.getElementById("startBtn").style.visibility="hidden";
    document.getElementById("endBtn").style.visibility="visible";
    document.getElementById("generateNumbersBtn").style.visibility="hidden";
    document.getElementById("randomizeNumbersBtn").style.visibility="hidden";
    
}
function end(obj){
    StartBool = false;
    watch.stop();
    watch.showTime();
    document.getElementById("generateNumbersBtn").style.visibility="visible";
    document.getElementById("randomizeNumbersBtn").style.visibility="visible";
    document.getElementById("endBtn").style.visibility="hidden";
    document.getElementById("restartBtn").style.visibility="visible";
    check();
}
function restart(){
    start();
    timer.textContent="";
    document.getElementById("restartBtn").style.visibility="hidden";
    document.getElementById("endBtn").style.visibility="visible";
}

function check(){
    var i,j;
    for(i=2;i<=9;i++){
        for(j=2;j<=9;j++){
            var doc = document.getElementById("text"+i+j);
            var index1 = doc.id[4];
            var index2 = doc.id[5];

            var answer = parseFloat(doc.value);
            var number1=parseFloat(document.getElementById("numbercolumn"+index1).innerText);
            var number2=parseFloat(document.getElementById("numberrow"+index2).innerText);
            if (Math.abs(answer - number1*number2)<0.0001){
                doc.style.backgroundColor="lawngreen";
                nCorrect++;
            }else{
                doc.style.backgroundColor="#aa0000";
            }
        }
    }
    document.getElementById("accuracy").textContent=nCorrect.toString() + " / 81 правильных ответов";
}
function reset(){
    var i,j;
    for(i=2;i<=9;i++){
        for(j=2;j<=9;j++){
            document.getElementById("text"+i+j).value = "";
            document.getElementById("text"+i+j).style.borderColor="black";
            document.getElementById("text"+i+j).style.background="none";
        }
    }
    for(i=2;i<=9;i++){  
        document.getElementById("numbercolumn" + i).innerText=i;
        document.getElementById("numberrow" + i).innerText=i;
    } 
    nCorrect=0;
    watch.reset();
    timer.textContent="";
    document.getElementById("accuracy").textContent="";
}
function generateNumbers(){

    reset();

    var negativeNumbers=document.getElementById("negativeNumbers").checked;
    var decimalNumbers=document.getElementById("decimalNumbers").checked;

    var negativeRandom;
    var decimalRandom;

    for(i=2;i<=9;i++){
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
        if (decimalRandom) document.getElementById("numbercolumn" + i).innerText="0." + document.getElementById("numbercolumn" + i).innerText;
        if (negativeRandom) document.getElementById("numbercolumn" + i).innerText="-" + document.getElementById("numbercolumn" + i).innerText;
    } 
    for(i=2;i<=9;i++){
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
        if (decimalRandom) document.getElementById("numberrow" + i).innerText="0." + document.getElementById("numberrow" + i).innerText;
        if (negativeRandom) document.getElementById("numberrow" + i).innerText="-" + document.getElementById("numberrow" + i).innerText;
    } 
}
function randomizeNumbers(){
    var i;
    for(i=0;i<10;i++){
        var randomNumber1 = getRandomInt(8) + 2;
        var randomNumber2 = getRandomInt(8) + 2;
        
        var temp = document.getElementById("numbercolumn" + randomNumber1).innerText;
        document.getElementById("numbercolumn" + randomNumber1).innerText = document.getElementById("numbercolumn" + randomNumber2).innerText;
        document.getElementById("numbercolumn" + randomNumber2).innerText = temp;
    }
    for(i=0;i<10;i++){
        var randomNumber1 = getRandomInt(8) + 2;
        var randomNumber2 = getRandomInt(8) + 2;
        
        var temp = document.getElementById("numberrow" + randomNumber1).innerText;
        document.getElementById("numberrow" + randomNumber1).innerText = document.getElementById("numberrow" + randomNumber2).innerText;
        document.getElementById("numberrow" + randomNumber2).innerText = temp;
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}