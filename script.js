const banglaCalculate = document.getElementById('bangla-calculate');
const englishCalculate = document.getElementById('english-calculate');
const ictCalculate = document.getElementById('ict-calculate');
const totalCalculate = document.getElementById('total-calculate');

const banglaNumber = document.getElementById('bangla-number');
const englishNumber = document.getElementById('english-number');
const ictNumber = document.getElementById('ict-number');
const totalNumber = document.getElementById('total-number');

const banglaGrade = document.getElementById('bangla-grade');
const englishGrade = document.getElementById('english-grade');
const ictGrade = document.getElementById('ict-grade');
const finalGrade = document.getElementById('final-grade');

function gettingNumberPuttingResult(subjectNumber, subjectGrade){
    const number = parseFloat(subjectNumber.value);
    // console.log(number);
    const grade = gradeCalculator(number);
    // console.log(grade);
    subjectGrade.innerText = grade;
}

banglaCalculate.addEventListener('click', function(){
    gettingNumberPuttingResult(banglaNumber, banglaGrade);
});
englishCalculate.addEventListener('click', function(){
    gettingNumberPuttingResult(englishNumber, englishGrade);
});
ictCalculate.addEventListener('click', function(){
    gettingNumberPuttingResult(ictNumber, ictGrade);
});

totalCalculate.addEventListener('click', function(){
    gettingNumberPuttingResult(banglaNumber, banglaGrade);
    gettingNumberPuttingResult(englishNumber, englishGrade);
    gettingNumberPuttingResult(ictNumber, ictGrade);
    
    const b = parseFloat(banglaNumber.value);
    const e = parseFloat(englishNumber.value);
    const i = parseFloat(ictNumber.value);
    const total = b + e + i;
    totalNumber.innerText = total;
    const average = total / 3;
    const grade = gradeCalculator(average);
    finalGrade.innerText = grade;
})

function gradeCalculator(number){
    if(number >= 80){
        return "A+";
    }
    else if(number >= 70){
        return "A";
    }
    else if(number >= 60){
        return "A-";
    }
    else if(number >= 50){
        return "B";
    }
    else if(number >= 40){
        return "C";
    }
    else if(number >= 33){
        return "D";
    }
    else if(number >= 0){
        return "F";
    }
    else{
        return "Invalid Number";
    }
}

