//Pattern to be Printed.

//- - - - * - - - -  2*(i)-1 = 1
//- - - * * * - - -  2*(2)-1 = 3
//- - * * * * * - -  2*(3)-1 = 5
//- * * * * * * * -  2*(4)-1 = 7
//* * * * * * * * *  2*(5)-1 = 9


// space - 4 = 5-1
// space - 3 = 5-2
// space - 2 = 5-3
// space - 1 = 5-4
// space - 0 = 5-5

// star = 1 
// star = 3;
// star = 5;
// star = 7;
// star - 9; 

function pattern7(n){
    let finalResult = ""
    for(let i=1; i<=n; i++){
        let result = ""

        // lets print space first of all
        for(let j=1; j<=n-i; j++){
            result+="- "
        }

        // lets print star now; 
        for(let z = 1; z<=2*(i)-1; z++){
            result+="* "
        }

        for(let k=1; k<=n-i; k++){
            result+="- "
        }
        finalResult+=result

        if(i!==5){
            finalResult+='\n'
        }
    }
    return finalResult;
}

console.log(pattern7(5))

