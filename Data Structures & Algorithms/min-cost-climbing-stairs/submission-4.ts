class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const cache = new Int32Array(cost).fill(-1);

        function dfs(i) {
            if(i > cost.length) return 0;
            if(cache[i] != -1) return cache[i];

            return cache[i] = cost[i] + Math.min(dfs(i+1), dfs(i+2));
        }

        return Math.min(dfs(0), dfs(1));
    }
}
