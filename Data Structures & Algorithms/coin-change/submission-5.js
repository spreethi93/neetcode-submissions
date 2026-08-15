class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        //dp array
        //dp[amount] = 1 + dp[amount - c];
        const dpArr = new Array(amount + 1).fill(amount + 1);
        dpArr[0] = 0;

        for(let i = 1; i <= amount; i++) {
            for(let c of coins) {
                if( (i - c) >= 0) {
                    dpArr[i] = Math.min(dpArr[i], 1 + dpArr[i-a]);
                }
            }
        }
        return dpArr[amount] > amount ? -1 : dpArr[amount];
    }
    // coinChange(coins, amount) {
    //     const dpArr = new Array(amount + 1).fill(amount + 1);
    //     dpArr[0] = 0;
    //     for(let i = 1; i <= amount; i++) {
    //         for(let a of coins) {
    //             if((i - a) >= 0) {
    //                 dpArr[i] = Math.min(dpArr[i], 1 + dpArr[i - a]);
    //             }

    //         }
    //     }

    //     return dpArr[amount] > amount ? -1 : dpArr[amount];
    // }
}
