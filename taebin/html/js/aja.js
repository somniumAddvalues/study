function work(callback) {
    setTimeout(() => {
    const start = Date.now();
    for (let i=0; i<1000000000;i++){

    }
    const end = Date.now();
    console.log(end-start + 'ms');
    callback(end-start)
}, 0);

}
console.log('작업시작');
work((ms) =>{
    console.log("작업이 끝났어여");
    console.log(ms);
});
console.log('다음작업');

//promise
function increaseAndPring(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const value = n +1;
            if (value === 5){
                const error = new Error();
                error.name = 'ValueIs FiveError';
                reject(error);
                return ;
        }
        console.log(value);
        resolve(value);   
        },1000);
    })
}
increaseAndPring(0).then(increaseAndPring)
.then(increaseAndPring)
.then(increaseAndPring)
.then(increaseAndPring)
.then(increaseAndPring)
.catch(e => {
    console.error(e)
});


function sleep(ms){
    return new Promise(resolve => setTimeout( resolve,ms));
}


async function process(){
    console.log('안녕하세요');
    await sleep(1000);
    console.log('반갑습니다');
    return true;
}

process().then(value => {
    console.log(value);
});


const getDog = async () => {
    await sleep(1000);
    return '멍멍이'
}

const getRabbit = async () =>{
    await sleep(500);
    return '토끼';
}

const getTurtle = async () => {
    await sleep(3000);
return '거북이'
}

async function process1() {
    const result = await Promise.all([getDog(),getRabbit(),getTurtle()]);
    console.log(result)
};