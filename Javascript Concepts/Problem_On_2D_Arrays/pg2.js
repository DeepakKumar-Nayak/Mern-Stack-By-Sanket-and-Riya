// 1   2   3   4
// 5   6   7   8
// 9   10  11  12 
// 13  14  15  16
// 17  18  19  20

// this is waht we have to print but apko colum wise karna padega like wave that means pehle 1 se 17 and then 18 se 2. this what you have to do 

function printGrid(grid, m,n){
    let str=""
    for(let col=0; col<m; col++){
        if(col % 2 ==0){
            for (let row=0; row<n; row++){
                str+= grid[row][col]+ " "
            }
        }else{
            for(let row=n-1; row>=0; row -- ){
                str+=grid[row][col]+ " "
            }
        }
    
    }
    console.log(str)
}
let grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]
printGrid(grid,4,5)

// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16 
// 17 18 19 20