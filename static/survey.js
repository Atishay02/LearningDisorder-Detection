console.log("Welcome to the survey!")

let arr = [], score, sum = 0, dyslexia_score = 0, dysgraphia_score = 0, dyscalculia_score = 0;
let ans = [];
let output = "";
for (var i = 1; i <= 20; i++){
    ans[i] = 0;
    arr[i]=0;
}

function q1score() {
    if (document.getElementById('q1a').checked)
        ans[1] = document.getElementById('q1a').value;

    else if (document.getElementById('q1b').checked)
        ans[1] = document.getElementById('q1b').value;

    else if (document.getElementById('q1c').checked)
        ans[1] = document.getElementById('q1c').value;
}

function q2score() {
    if (document.getElementById('q2a').checked)
        ans[2] = document.getElementById('q2a').value;

    else if (document.getElementById('q2b').checked)
        ans[2] = document.getElementById('q2b').value;

    else if (document.getElementById('q2c').checked)
        ans[2] = document.getElementById('q2c').value;
}

function q3score() {
    if (document.getElementById('q3a').checked)
        ans[3] = document.getElementById('q3a').value;

    else if (document.getElementById('q3b').checked)
        ans[3] = document.getElementById('q3b').value;

    else if (document.getElementById('q3c').checked)
        ans[3] = document.getElementById('q3c').value;
}

function q4score() {
    if (document.getElementById('q4a').checked)
        ans[4] = document.getElementById('q4a').value;

    else if (document.getElementById('q4b').checked)
        ans[4] = document.getElementById('q4b').value5

    else if (document.getElementById('q4c').checked)
        ans[4] = document.getElementById('q4c').value;
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

    else if (document.getElementById('q6c').checked)
        ans[6] = document.getElementById('q6c').value;
}

function q7score() {
    if (document.getElementById('q7a').checked)
        ans[7] = document.getElementById('q7a').value;

    else if (document.getElementById('q7b').checked)
        ans[7] = document.getElementById('q7b').value;

    else if (document.getElementById('q7c').checked)
        ans[7] = document.getElementById('q7c').value;
}

function q8score() {
    if (document.getElementById('q8a').checked)
        ans[8] = document.getElementById('q8a').value;

    else if (document.getElementById('q8b').checked)
        ans[8] = document.getElementById('q8b').value;

    else if (document.getElementById('q8c').checked)
        ans[8] = document.getElementById('q8c').value;
}

function q9score() {
    if (document.getElementById('q9a').checked)
        ans[9] = document.getElementById('q9a').value;

    else if (document.getElementById('q9b').checked)
        ans[9] = document.getElementById('q9b').value;

    else if (document.getElementById('q9c').checked)
        ans[9] = document.getElementById('q9c').value;
}

function q10score() {
    if (document.getElementById('q10a').checked)
        ans[10] = document.getElementById('q10a').value;

    else if (document.getElementById('q10b').checked)
        ans[10] = document.getElementById('q10b').value;

    else if (document.getElementById('q10c').checked)
        ans[10] = document.get1ElementById('q10c').value;
}

function q11score() {
    if (document.getElementById('q11a').checked)
        ans[11] = document.getElementById('q11a').value;

    else if (document.getElementById('q11b').checked)
        ans[11] = document.getElementById('q11b').value;

    else if (document.getElementById('q11c').checked)
        ans[11] = document.get1ElementById('q11c').value;
}

function q12score() {
    if (document.getElementById('q12a').checked)
        ans[12] = document.getElementById('q12a').value;

    else if (document.getElementById('q12b').checked)
        ans[12] = document.getElementById('q12b').value;

    else if (document.getElementById('q12c').checked)
        ans[12] = document.getElementById('q12c').value;
}

function q13score() {
    if (document.getElementById('q13a').checked)
        ans[13] = document.getElementById('q13a').value;

    else if (document.getElementById('q13b').checked)
        ans[13] = document.getElementById('q13b').value;

    else if (document.getElementById('q13c').checked)
        ans[13] = document.getElementById('q13c').value;
}

function q14score() {
    if (document.getElementById('q14a').checked)
        ans[14] = document.getElementById('q14a').value;

    else if (document.getElementById('q14b').checked)
        ans[14] = document.getElementById('q14b').value;

    else if (document.getElementById('q14c').checked)
        ans[14] = document.getElementById('q14c').value;
}

function q15score() {
    if (document.getElementById('q15a').checked)
        ans[15] = document.getElementById('q15a').value;

    else if (document.getElementById('q15b').checked)
        ans[15] = document.getElementById('q15b').value;

    else if (document.getElementById('q15c').checked)
        ans[15] = document.getElementById('q15c').value;
}

function q16score() {
    if (document.getElementById('q16a').checked)
        ans[16] = document.getElementById('q16a').value;

    else if (document.getElementById('q16b').checked)
        ans[16] = document.getElementById('q16b').value;

    else if (document.getElementById('q16c').checked)
        ans[16] = document.getElementById('q16c').value;
}

function q17score() {
    if (document.getElementById('q17a').checked)
        ans[17] = document.getElementById('q17a').value;

    else if (document.getElementById('q17b').checked)
        ans[17] = document.getElementById('q17b').value;

    else if (document.getElementById('q17c').checked)
        ans[17] = document.getElementById('q17c').value;
}

function q18score() {
    if (document.getElementById('q18a').checked)
        ans[18] = document.getElementById('q18a').value;

    else if (document.getElementById('q18b').checked)
        ans[18] = document.getElementById('q18b').value;

    else if (document.getElementById('q18c').checked)
        ans[18] = document.getElementById('q18c').value;
}

function q19score() {
    if (document.getElementById('q19a').checked)
        ans[19] = document.getElementById('q19a').value;

    else if (document.getElementById('q19b').checked)
        ans[19] = document.getElementById('q19b').value;

    else if (document.getElementById('q19c').checked)
        ans[19] = document.getElementById('q19c').value;
}

function q20score() {
    if (document.getElementById('q20a').checked)
        ans[20] = document.getElementById('q20a').value;

    else if (document.getElementById('q20b').checked)
        ans[20] = document.getElementById('q20b').value;

    else if (document.getElementById('q20c').checked)
        ans[20] = document.getElementById('q20c').value;
}

function submitscore() {

    sum=0; score=0;
    for (var i = 1; i <= 20; i++) {
        arr[i] = Number(ans[i]);
        sum += arr[i];
        if (arr[i] < 6) {
            dyscalculia_score += arr[i];
        }
        else if (arr[i] < 11 && arr[i] > 5) {
            dyslexia_score += arr[i];
        }
        else if (arr[i] < 16 && arr[i] > 10) {
            dysgraphia_score += arr[i];
        }
        if (arr[i] > 15) {
            dyslexia_score += arr[i];
            dysgraphia_score += arr[i];
            dyscalculia_score += arr[i];
        }
    }
    if (dyslexia_score > 28 && dysgraphia_score > 28 && dyscalculia_score > 28)
        output = "Congratulations! Your child does not show any symptoms of any learning disability.";
    else {
        output = "We recommend your child to take the quiz for";
        if (dyslexia_score <= 28)
            output += " Dyslexia ";
        if (dysgraphia_score <= 28)
            output += " Dysgraphia ";
        if (dyscalculia_score <= 28)
            output += " Dyscalculia ";
    }
    score = sum / 80;
    var rounded = score.toFixed(1);
    alert(`Your survey score is : ${rounded} and ${output}`)
}
