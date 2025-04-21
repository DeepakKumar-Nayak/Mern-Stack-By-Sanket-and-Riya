// [[1,2,3],[4,5,6],[7,8,9]]
// Output : [[1,4,7],[2,5,8],[3,6,9]]

let array = [[1,2,3],[4,5,6],[7,8,9]]

function transpose_matrix(array){
    for(let i=0; i<array.length; i++){
        for(let j=i; j<array[i].length; j++){
            let temp = array[i][j]
            array[i][j] = array[j][i]
            array[j][i] = temp
        }
    }
    return array;
}

console.log(transpose_matrix(array))