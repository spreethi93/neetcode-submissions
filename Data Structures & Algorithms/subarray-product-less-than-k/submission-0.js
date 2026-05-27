class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {
        let l=0;
        let currentProduct = 1;
        let resNo = 0;
        for(let r = 0 ; r < nums.length ; r++){
            currentProduct *= nums[r];

            while(l<=r && currentProduct >= k){
                currentProduct = currentProduct / nums[l];
                l++;
            }
            resNo = resNo + (r-l+1);
        }
        return resNo;
    }
}
