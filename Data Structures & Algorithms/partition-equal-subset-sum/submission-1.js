class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let sum = nums.reduce((a, b) => a + b, 0);
        if(sum % 2 !== 0) return false;

        const cache = Array.from(Array(nums.length + 1), () => Array(sum/2 + 1).fill(null),);

        function dfs(i, target) {
            if(i === nums.length) {
                return target === 0;
            }

            if(target < 0) {
                return false;
            }

            if(cache[i][target] != null) {
                return cache[i][target];
            }

            return (cache[i][target] = dfs(i + 1, target) || dfs(i + 1, target - nums[i]));
        }

        return dfs(0, sum/2);
    }
}
