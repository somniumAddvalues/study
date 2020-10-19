const dogname ='멍멍이';


//키,값으로 구성된다.




const ironMan ={
    name:'토니 스타크',
    actor:'로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name:'스티븐 로저스',
    actor:"크리스 에반스",
    alias:'캡틴 아메리카'
};

function print({alias,name,actor}){
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다`;
    console.log(text);

}
print(ironMan)

//비구조화 할당
const cat = {
    name: '야옹이',
    sound: '냐옹',
    say: function(){
        console.log(this.sound);
    }
};




const dog = {
    _name: '멍멍이',
    age:2,
    set name(value){
        console.log('이름이 바뀝니다..'+ value);
        this._name = value;
    }
}

console.log(dog._name);
dog.name='뭉뭉이';
console.log(dog._name);


const numbers = {
    a:1,
    b:2,
    get sum(){
        console.log('sum 하숨가 실행 됩나디');
        return this.a + this.b;
    }
};

numbers.a = 5;
console.log(numbers.sum);


