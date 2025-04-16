function majorityElement(num){
    let majority_element = -1
    let frquency=0;

    for(let i=0; i<num.length; i++){
        if(frquency ==0){
            majority_element = num[i]
        }
        if(majority_element = num[i]){
            frquency++
        }else{
            frquency--
        }
    }
    return majority_element;
    
}

console.log(majorityElement([3,2,3,2,1,2]))

function majorityElement(num){
    let majority_element = -1
    let frequenry = 0; 

    for(let i=0; i<num.length; i++){
       if(frequenry ==0){
        majorityElement= num[i]
       }
       if(num[i] == majorityElement){
        frequenry++
       }else{
        frequenry--
       }
    }
    return majority_element
}

console.log(majorityElement([3,2,3,2,1,2]))