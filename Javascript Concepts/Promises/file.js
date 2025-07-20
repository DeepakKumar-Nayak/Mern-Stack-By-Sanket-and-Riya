const p1 = new Promise((res,rej)=>{
    console.log('Executor callback for timer One')
        console.log('i am from timer one')
        res(100)
})

p1.then(function a(){console.log('a')}, function b(){console.log('b')})

setTimeout(() => {
    console.log('timer two')
}, 3000);

const pr = new Promise(function exec(res,rej){
    console.log('executor callback from pr')
    setTimeout(function prcb(){
        const randomNumber = Math.floor(Math.random()*100)
        if(randomNumber % 2 === 0){
            res(randomNumber)
        }else{
            rej(randomNumber)
        }
    },4000)
})

pr.then(
    function f(){console.log('i am from f')}, 
    function g(){console.log('i am from g')}
)
for(let i=0; i<=1000000; i++){}
console.log('end')