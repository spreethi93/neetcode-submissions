class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let currSum = 0;
        for(let n of nums) {
            if(currSum < 0) {
                currSum = 0;
            }
            currSum += n;
            maxSum = Math.max(currSum, maxSum);
        }

        return maxSum;
    }
    // maxSubArray(nums) {
    //     let maxSum = nums[0];
    //     let currSum = 0;
    //     for(let n of nums){
    //         if(currSum < 0){
    //             currSum = 0;
    //         }
    //         currSum += n;
    //         maxSum = Math.max(maxSum, currSum);
    //     }
    //     return maxSum;
    // }
}
