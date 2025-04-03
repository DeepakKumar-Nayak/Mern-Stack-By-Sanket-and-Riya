// Best time to buy and sell stocks. 
// sabse minimum value  and that was the best time to buy stocks. 
// and sabse jyada valye jahan hoga that was the best time to sell stocks 
// suppose apne apna stock khariba jab uska rate 1rs hai .. 
// and aap usko tab sell kar rahe ho jab uska value 10 rs ban gaya hai toh apko faisa kitna hua 9 rs ka faida hua na 

// so sabse pehle minimum value nikalo and usko tab buy kar do
// then aap maxmimum value nikalo and usko sell karko apko profil mil jaega. 

//const stocks = [10,20,1,4,5,70,80]

// so hamesha hame track rakhna padega ki minimum value konsa hai so that ham kam se kam paise mein kharid sakhe 
// kyun ki aisa bhi hosakhta hai ki aur kuch stocks add ho jaye for example: 

const stockss = [7,6,4,3,1]
// yahan pe aggar mein dekhun toh stock ka value 1 hai so mein us day mein kharidunga and bechunga kab jab stock ka value 80 hoga tab. 


// so ek kam karte hein ham sabse kam paise mein stock ko kharidte hein sabse minimum value ko nikalte hein

function findMaxProfit(prices){
    let currMin = prices[0]
    let profit = 0; 
    
    for(let i=1;i<prices.length; i++){

        // can i buy
        if(prices[i]<currMin){
            currMin = prices[i]
        }

        // can i got for sell
        if(prices[i]> currMin){
            // if it is then we can sell but we have to check that the profit is better than previous or not
            profit = Math.max(profit, prices[i]- currMin)
        }
    }
    return profit
    
}

console.log(findMaxProfit([7,6,4,3,2,1,10]))