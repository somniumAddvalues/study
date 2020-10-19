//삼항 연상자

const array = [1,2,];

let test = array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';
console.log(test);

//truthly and falsely
//undefiend,null,0,'',NaN -> falsy
function print(person) {
    if (!person){
        console.log(person.name);  
    }
}
const  person = {
    name : 'John'
};

//print();
//단축 평가 논리 계산법
const dog ={
    name: 'david'
};

function getName(animal){
    return animal && animal.name;
}

console.log(getName(dog))

