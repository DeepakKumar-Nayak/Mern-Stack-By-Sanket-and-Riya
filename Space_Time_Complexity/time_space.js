function f(n){
    let ans = "";
    for(let i=0; i<n; i++){
        ans+=i;
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            ans+= i+j
        }
    }
}

console.log(f(5))

// yeah jo program hai yeah actually O(n2) agar ham eska time complexity nikale toh maximum cases meon aggar ham ek nested loop ki baat karey matlab ek for loop ke andar aur ek for loop toh usually yeah hota hai O(n2) par depend karta hai ki kaise likhha gaya hai loop .. aggar pehle wala loop i<n aur dusra wala i<m toh nahi hoga O(n2) jaise ki 

function g(n,m){
    let data = ""
    for(let i=0; i<=m; i++){
        for(let j=0; j<=n; j++){
            dsta+= i+m
        }
    }
    return data
}
console.log(3,4)

// eska time complexity hai O(m*n) toh farak hai dono mein .. 

//\\ kuch examples hai  O(n2). 

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // constant work
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        // constant work
    }
}

// 3. Different Sizes Loop (O(m * n))
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        // constant work
    }
}