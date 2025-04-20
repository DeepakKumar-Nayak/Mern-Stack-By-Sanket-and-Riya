// ek array banao jismein rows honge 5 and har row mein 6 value rakhna jiska value hoga zero 5*6

function printGrid(grid){
    let finalresult=""
    for(let i=0; i<grid.length; i++){
        let str=""
        console.log(grid[i])
        for(j=0; j<grid[i].length; j++){
            str+=grid[i][j]+" "
        }

        finalresult+=str
        if(i!==4){
            finalresult+="\n"
        }
       
    }
    return finalresult;
}

console.log(printGrid([[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]]))
