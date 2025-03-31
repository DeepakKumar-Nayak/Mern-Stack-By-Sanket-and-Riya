function pattern6(n){

    for(let i=1; i<=n; i++){
        let dash = ""
        for(let j=1; j<=n-i; j++){
            dash+="- "
        }
        for(let star=1; star<=(2*i)-1; star++){
            dash+="* "
        }
        console.log(dash)
    }

    for(let i=1; i<=n-1; i++){
        dash = ""
        for(let k=1; k<=i; k++){
            dash+="- "
        }
        for(let star=1; star<=2*(n-i)-1; star ++){
            dash+="* "
        }
        console.log(dash)
    }

}

pattern6(6)