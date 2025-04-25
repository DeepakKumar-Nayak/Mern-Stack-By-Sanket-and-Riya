function merge(num1, m, num2, n){
    let result = []
    let i = 0;
    let j = 0;

    while(i<m && j<n){
        if(num1[i]<num2[j]){
            result.push(num1[i])
            i++
        }else{
            result.push(num2[j])
            j++
        }
    }
    // if there is still some element; 
    while (i<m){
        result.push(num1[i])
        i++
    }
    while (j<n){
        result.push(num2[j])
        j++

    }

    // change the original array that is num1; 
    for(let i=0; i<result.length; i++){
        num1[i] = result[i]
    }
    console.log(num1)
}
    merge([1,2,3,0,0,0],3,[2,5,6],3)