function pattern4(n){
    for(let i=1; i<=n; i++){
        let dash = ""

        // Logic for printing dash(-)
        for(let j=1; j<=n-i; j++){
            dash+="- "
        }
        // Logic for Printing stars(*)
        for(let star=1; star<=i; star++){
            dash+= "* "
        }
        console.log(dash)
    }
}

pattern4(5)