class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let n of nums) {
            let idx = Math.abs(n) - 1;
            if(nums[idx] < 0) {
                return Math.abs(n);
            }
            nums[idx] *= -1;
        }
        return -1;
    }
}
