function f(n){
    let ans = 0; 
    for(let i=1; i<n; i++){
        for(j=n; j>1; j--){
            ans+=i
        }
        console.log(i)
    }
    return ans
}

console.log(f(5))