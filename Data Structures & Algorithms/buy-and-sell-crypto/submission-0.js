class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let L = 0, R = 1;
        let currMax = 0;
        while (R <= prices.length){
            if(prices[R] > prices[L]) {
                currMax = Math.max(currMax, prices[R] - prices[L]);
            } else {
                L = R;
            }
            R++;
        }
        return currMax;
    }
}
