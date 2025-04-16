// buy and sell 
// sabse kam mein kharidna and jab jyada ho tab bhejna 

let buy_sell = function(num){
    let min_value = num[0]
    let profit =0
    for(let i=1; i<num.length; i++){
        if(num[i]< min_value){
            min_value = num[i]
        }
        if(num[i]>min_value){
            profit = Math.max(profit, num[i]-min_value)
        }
    }
    return profit
}

console.log(buy_sell([10,2,90,67,45,89,90]))