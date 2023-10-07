console.log("Welcome to the quiz!")
let comp=0, memory=0, fluency=0, word=0;
let start = Date.now(), end, diff, speed_score;
let ans=[], arr=[];
for(let i=1; i<=10; i++)
    ans[i]=0;

function q1score() {
    if (document.getElementById('q1a').checked)
        ans[1] = document.getElementById('q1a').value;
        
    else if (document.getElementById('q1b').checked)
        ans[1] = document.getElementById('q1b').value;
}

function q2score() {
    if (document.getElementById('q2a').checked)
        ans[2] = document.getElementById('q2a').value;

    else if (document.getElementById('q2b').checked)
        ans[2] = document.getElementById('q2b').value;

    else if (document.getElementById('q2c').checked)
        ans[2] = document.getElementById('q2c').value;
    
        else if (document.getElementById('q2d').checked)
        ans[2] = document.getElementById('q2d').value;
}

function q3score() {
    if (document.getElementById('q3a').checked)
        ans[3] = document.getElementById('q3a').value;

    else if (document.getElementById('q3b').checked)
        ans[3] = document.getElementById('q3b').value;
}

function q4score() {
    if (document.getElementById('q4a').checked)
        ans[4] = document.getElementById('q4a').value;

    else if (document.getElementById('q4b').checked)
        ans[4] = document.getElementById('q4b').value5
}

function q5score() {
    if (document.getElementById('q5a').checked)
        ans[5] = document.getElementById('q5a').value;

    else if (document.getElementById('q5b').checked)
        ans[5] = document.getElementById('q5b').value;

    else if (document.getElementById('q5c').checked)
        ans[5] = document.getElementById('q5c').value;
}

function q6score() {
    if (document.getElementById('q6a').checked)
        ans[6] = document.getElementById('q6a').value;

    else if (document.getElementById('q6b').checked)
        ans[6] = document.getElementById('q6b').value;
}

function q7score() {
    if (document.getElementById('q7a').checked)
        ans[7] = document.getElementById('q7a').value;

    else if (document.getElementById('q7b').checked)
        ans[7] = document.getElementById('q7b').value;
}

function q8score() {
    if (document.getElementById('q8a').checked)
        ans[8] = document.getElementById('q8a').value;

    else if (document.getElementById('q8b').checked)
        ans[8] = document.getElementById('q8b').value;
}

function q9score() {
    if (document.getElementById('q9a').checked)
        ans[9] = document.getElementById('q9a').value;

    else if (document.getElementById('q9b').checked)
        ans[9] = document.getElementById('q9b').value;
}

function q10score() {
    if (document.getElementById('q10a').checked)
        ans[10] = document.getElementById('q10a').value;

    else if (document.getElementById('q10b').checked)
        ans[10] = document.getElementById('q10b').value;

    else if (document.getElementById('q10c').checked)
        ans[10] = document.get1ElementById('q10c').value;

    else if (document.getElementById('q10d').checked)
        ans[10] = document.get1ElementById('q10d').value;
}


function submitscore() {

    diff=0;
    speed_score=0;
    end = Date.now();
    diff =(end - start)/1000;
    
    if(diff>40 && diff<=60)
        speed_score=1;
    else if(diff>60 && diff<=70)
        speed_score=0.9;
    else if(diff>70 && diff<=80)
        speed_score=0.8;
    else if(diff>80 && diff<=90)
        speed_score=0.7;
    else if(diff>90 && diff<=100)
        speed_score=0.6;
    else if(diff>100 && diff<=110)
        speed_score=0.5;
    else if(diff>110 && diff<=120)
        speed_score=0.4;
    else if(diff>120 && diff<=150)
        speed_score=0.3;
    else if(diff>150 && diff<=180)
        speed_score=0.2;
    else if(diff>180 && diff<=200)
        speed_score=0.1;
    


    for(var i=0; i<=10; i++)
        arr[i]=Number(ans[i]);

    comp = (arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[8])/28;
    memory = (arr[2]+arr[9])/8;
    fluency = (arr[1]+arr[3]+arr[4]+arr[6])/16;
    word = (arr[7]+arr[10])/8;

    alert(` Time Taken = ${diff} seconds \n Speed Score = ${speed_score} \n  Mathematical computational Score = ${comp.toFixed(1)} \n Memory Score = ${memory.toFixed(1)} \n Mathematical fluency Score = ${fluency.toFixed(1)} \n Quantitative Analysis Score = ${word.toFixed(1)}`)
}