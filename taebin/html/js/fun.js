function calculateCircleArea(r = 1) {
    return Math.PI *r*r;
}

const area = calculateCircleArea(4);
console.log(area);

//비구조화 할당
const animal = {
    name:'멍멍이',
    type:'개'
};

const {name: nickname} =  animal;
console.log(animal);

const array = [1,2];



const [one, two] = array;
console.log(one)

const deepObject ={
    state: {
        information:{
            name: "velopert",
            languages: ['korean','english','chines']
        }
    },
    value : 5
}

const {name,languages } = deepObject.state.information;
const {value} = deepObject;
console.log(value)

//spread 와 rest

const slime = {
    name: '슬라임'
};

const cuteSlime ={
    ...slime,
    attribute:'cute'
};

const purpleCuteSlime = {
    ...cuteSlime,
    color:"purple"
};

const greenCuteSlime = {
    ...cuteSlime,
    color:"green"
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);

const animals = ['개','고양이','참새'];
const anotherAnimals = [...animals,'비둘기']

console.log(animals);
console.log(anotherAnimals);

//
function sum(...rest){

    return rest.reduce((acc,current) => acc+current,0);
}
