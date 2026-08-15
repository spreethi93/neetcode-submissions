class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {

        const cache = new Int32Array(cost.length).fill(-1);

        function dp(i) {
            if(i >= cost.length) return 0;
            if(cache[i] !== -1) return cache[i];

            return cache[i] = cost[i] + Math.min(dp(i + 1). dp(i + 2));

        }

        return Math.min(dp(0), dp(1));
    }
}
