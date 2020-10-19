//const numbers = [10,20,30,40,50]

// for (let number of numbers){
//     console.log(number)
// }


const doggy = {
    name:'멍멍이',
    sound: '멍멍',
    age:2
};

// console.log(Object.entries(doggy))
// console.log(Object.keys(doggy));
// console.log(Object.values(doggy));

for (let key in doggy){
    console.log(`${key}: ${doggy[key]}`);
}


function sumOf(numbers){
let sum =0;
for(let i = 0; i< numbers.length;i++){
    sum += numbers[i];
    }
    return sum;
}


const result = sumOf([1,2,3,4,5]);
console.log(result)


// const result1= []
// for(let i =0;i<numbers.length;i++){
//     if (numbers[i]>3){
//         result1.append(numbers[i])
//     }
// }
// return result1


const superheroes = ['아이언맨','캡틴 아메키라','토르','닥터 스트레인지']
function print(hero){
    console.log(hero)
}

//superheroes.forEach(print)
// superheroes.forEach(function(){
//     console.log(hero)
// })

superheroes.forEach((hero)=>{
    console.log(hero)
})


const sv= superheroes.map(a => {
    a = a+'1';
})

console.log(sv)