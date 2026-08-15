class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let n of nums) {
            idx = n - 1;
            nums[idx] *= -1;
        }


    }
}
