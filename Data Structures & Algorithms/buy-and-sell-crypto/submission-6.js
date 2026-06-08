class Solution {
    maxProfit(prices) {
        let profit = 0;
        let l = 0;
        let r = 1;
        while(r < prices.length) {
            let currProfit = prices[r] - prices[l];
            if(currProfit < 0) {
                l = r;
            } else {
                profit = Math.max(profit, currProfit);

            }
            r++;
        }
        return profit;
    }
}
// class Solution {
//     /**
//      * @param {number[]} prices
//      * @return {number}
//      */
//     maxProfit(prices) {
//         let maxProfit = 0;
//         let l = 0, r=1;
//         while(r <= prices.length) {
//             if(prices[r] > prices[l]){
//                 maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
//             } else {
//                 l = r;
//             }
//             r++;
//         }
//         return maxProfit;
//     }

//     // maxProfit(prices) {
//     //     let L = 0, R = 1;
//     //     let currMax = 0;
//     //     while (R <= prices.length){
//     //         if(prices[R] > prices[L]) {
//     //             currMax = Math.max(currMax, prices[R] - prices[L]);
//     //         } else {
//     //             L = R;
//     //         }
//     //         R++;
//     //     }
//     //     return currMax;
//     // }
// }
