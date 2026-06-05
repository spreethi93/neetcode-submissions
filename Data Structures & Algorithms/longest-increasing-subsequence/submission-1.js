class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const lisCache = new Array(nums.length).fill(1);
        for(let i = nums.length - 1; i >= 0; i--) {
            for(let j = i + 1; j <=nums.length; j++) {
                if(nums[j] > nums[i]) {
                    lisCache[i] = Math.max(lisCache[i], 1 + lisCache[j]);
                }
            }
        }
        return Math.max(...lisCache);
    }
}
