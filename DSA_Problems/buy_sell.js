// buy and sell 
// sabse kam mein kharidna and jab jyada ho tab bhejna 

let buy_sell = function(num){
   let minimum_value = num[0]
   let profit = 0;

   for(let i=0; i<num.length; i++){
    if(minimum_value > num[i]){
        minimum_value = num[i]
    }

    if(num[i]>minimum_value){
        profit = Math.max(profit, num[i]-minimum_value)
        
    }
   }
   return profit
}

console.log(buy_sell([7,1,5,3,6,4]))