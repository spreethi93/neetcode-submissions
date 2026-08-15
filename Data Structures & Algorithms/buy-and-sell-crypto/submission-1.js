class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let l = 0, r=1;
        while(r < prices.length) {
            let tempProfit = prices[r] - prices[l];
            maxProfit = Math.max(maxProfit, tempProfit);
            if(prices[r] < prices[l]){
                l++;
            }
            r++;
        }
        return maxProfit;
    }

    // maxProfit(prices) {
    //     let L = 0, R = 1;
    //     let currMax = 0;
    //     while (R <= prices.length){
    //         if(prices[R] > prices[L]) {
    //             currMax = Math.max(currMax, prices[R] - prices[L]);
    //         } else {
    //             L = R;
    //         }
    //         R++;
    //     }
    //     return currMax;
    // }
}
