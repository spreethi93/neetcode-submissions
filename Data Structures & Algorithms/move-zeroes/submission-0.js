class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let i = 0;
        for(let n of nums) {
            if(n !== 0){
                nums[i] = n;
                i++;
            }
        }

        while(i < nums.length){
            nums[i] = 0;
            i++;
        }
    }
}
