class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length
        if (n === 1) return nums[0];
        return Math.max(this.robHouseHelper(nums.slice(0, n - 1)), this.robHouseHelper(nums.slice(1, n)));
    }

    robHouseHelper(nums) {
        const cache = new Int32Array(nums.length).fill(-1);

        function dp(i) {
            if(i >= nums.length) return 0;
            if(cache[i] !== -1) return cache[i];

            return (cache[i] = Math.max(nums[i] + dp(i+2), dp(i+1)));
        }

        return dp(0);
    }
}
