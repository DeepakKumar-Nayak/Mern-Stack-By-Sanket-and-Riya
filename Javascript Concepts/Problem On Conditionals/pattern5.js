function pattern5(n){
    for(let i=1; i<=n; i++){
        let stars = ""
        for(j=1; j<=(n-i)+1; j++){
            stars+="* "
        }
        console.log(stars)
    }
}

pattern5(10)

