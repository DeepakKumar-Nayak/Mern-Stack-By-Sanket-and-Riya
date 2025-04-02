let str = "missippi"
let freMap = {}

for(let i of str){
    if(freMap[i]){
        freMap[i]+=1
    }else{
        freMap[i] = 1;
    }
}

console.log(freMap)