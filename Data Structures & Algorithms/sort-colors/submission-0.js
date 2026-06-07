class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let l = 0;
        let r = nums.length - 1;
        let i = 0;

        function swap(i, j) {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }

        while(i <= r) {
            if(nums[i] === 0) {
                swap(l, i);
                l++;
            } else if(nums[i] === 2) {
                swap(r, i);
                r--;
                i--;
            }
            i++;
        }
    }
}
