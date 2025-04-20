function merge(num1, m, num2, n){
    let result = Array(m+n).fill(0)
    console.log(result)
    let i = 0, j=0,k =0;

    while (i<m && j<n){
        if(num1[i]<num2[j]){
            result[k] = num1[i];
            k++
            i++
        }
        else{
            result[k]=num2[j]
            k++ 
            j++
        }
    }
    while(i<m){
        result[k] = num1[i]
        k++
        i++
    }

    while (j<m){
        result[k]=num2[j]
        k++
        j++
    }
    console.log(result)
}

merge([1,2,3,0,0,0],3,[2,5,6],3)