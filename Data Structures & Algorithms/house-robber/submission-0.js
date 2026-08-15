class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let oddSum = 0;
        let evenSum = 0;
        for(let i=0 ; i<nums.length ; i++) {
            if(i%2 === 0) {
                evenSum += nums[i];
            } else {
                oddSum += nums[i];
            }
        }
    }
}
