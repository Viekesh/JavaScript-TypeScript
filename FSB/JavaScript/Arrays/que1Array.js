"use strict";



// const prices = [7, 1, 5, 3, 6, 4];

// let maxProfit = function(prices) {

//     if(prices.length === 0) {
//         return 0;
//     }

//     let minPrice = prices[0];

//     let profit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         if(prices[i] < minPrice) {
//             minPrice = prices[i];
//         } else if ( prices[i] - minPrice > profit) {
//             profit = prices[i] - minPrice;
//         }
//     }

//     return profit;
// }

// console.log(maxProfit);





// solution which is given by Aadhar sir

// [7,1,5,3,6,4]
/**
 * @param {number[]} prices
 * @return {number}
 */

// const prices = [7, 1, 5, 3, 6, 4];

// var maxProfit = function(prices) {
    
//     if(prices.length === 0){
//         return 0;
//     }

//     let minPrice = prices[0];
//     let profit = 0;

//     for(let i = 0; i < prices.length; i++){
//         if(prices[i] < minPrice){
//             minPrice = prices[i];
//         }else if(prices[i] - minPrice > profit){
//             profit = prices[i] - minPrice;
//         }
//     }
//     return profit;
// };

// console.log(maxProfit);






// function maxProfit(prices) {
  
//     // Initialize the min price and max profit
//     let minPrice = Number.POSITIVE_INFINITY;
//     let maxProfit = 0;
  
//     // Iterate through the prices array
//     for (let price of prices) {
//       // Update the min price
//       minPrice = Math.min(minPrice, price);
  
//       // Update the max profit
//       maxProfit = Math.max(maxProfit, price - minPrice);
//     }
  
//     // Return the max profit
//     return maxProfit;
//   }
  

// const prices = [7, 1, 5, 3, 6, 4];

// const maxProfit = maxProfit(prices);

// console.log(maxProfit);


