const items = [

{
    id:1,
    text:'hello'
},
{
    id:2,
    text:'bye'
}
]


function addd(a){
    a = a+ "1"
    return a
}

const texts = items.map(item => item.text)
console.log(texts)


const superheroes = ['아이언맨','캡틴 아메키라','토르','닥터 스트레인지']

const index = superheroes.indexOf('토르') //index
const c = superheroes.map(addd)
console.log(index)
console.log(c)



const todos =[

    {
        id:1,
        text:'자바스크립트 입문',
        done:true
    },
    {
        id:2,
        text:'함수 배우기',
        done:true
    },
    {
        id:3,
        text: '객체와 배열 배우기',
        done:true
    },
    {
        id:4,
        text:'배열 내장힘수 배우기',
        done:false
    }
]


const index1 = todos.findIndex(todo => todo.id ===3)
console.log(index1)

const index2 = todos.find(todo => todo.id ===3)
console.log(index2)



const test1 = todos.filter(todo => todo.done ===true)
console.log(test1)