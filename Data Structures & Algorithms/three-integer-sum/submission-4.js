class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        for(let i=0; i< nums.length; i++){
            if(nums[i] > 0) break;
        }
    }
}
