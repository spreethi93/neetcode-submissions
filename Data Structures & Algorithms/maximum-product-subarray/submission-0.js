class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let currMin = 1;
        let currMax = 1;
        let res = nums[0];

        for(let n of nums) {
            if(n === 0) {
                currMin = 1;
                currMax = 1;
            }
            const temp = n * currMax;
            currMax = Math.max(Math.max(temp, n * currMin), n);
            currMin = Math.min(Math.min(temp, n * currMin), n);

            res = Math.max(res, currMax);
        }

        return res;
    }
}
