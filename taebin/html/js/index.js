// 변수와 상수에 대해서 알아보자
let value = 1;
console.log(value)
var c = 3;

let s = 2; 

//연산자
let value1 = 1+4;
const a = 1

//조건문
if(a+1 === 2){
    console.log('a +1 이 2입니다');
}

const device = 'iphone'

// switch 문
switch(device){
    case 'iphone':
        console.log("아이폰");
        break;
    case 'ipad':
        console.log("아이패드");
        break;
    //else === default
    default:
        console.log("모르겠네여..");
}

//function
function add1(a,b){
    return a+b;
}

const sum1 = add1(1,2);
console.log(sum1)

function hello(name){
    return console.log(`hello ${name}!`);   
}

const result = hello('velopert');


function getGrade(score){

    if(score === 100){
        return "A+";
    }
    else if (score >= 90){
        return "A";
    }
    else if (score === 89){
        return "B+";
    }
    else if (score >= 80){
        return "B";
    }
    else if (score === 79){
        return "C+";
    }
        else if (score >= 70){
        return "C";
    }
    else if (score === 69){
        return "D+";
    }
        else if (score >= 60){
        return "D";
    }
    else{
        return "F";
    }
}

//화살표 함수
const add = (a,b) => {
    return a+b;
} 

const add2 = (a,b) => a+b;

const sum = add(1,2);
console.log(sum)





const grade = getGrade(100);