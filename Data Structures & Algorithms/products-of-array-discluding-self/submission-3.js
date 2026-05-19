class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const pref = new Array(n).fill(1);
        const suff = new Array(n).fill(1);
        const res = new Array(n).fill(1);;

        for(let i=1; i<n; i++){
            pref[i] = pref[i-1]*nums[i-1];
        }

        for(let i=n-2; i>=0; i--){
            suff[i] = suff[i+1]*nums[i+1];
        }

        for(let i=0; i<n; i++){
            res[i] = pref[i]*suff[i];
        }

        return res;
    }
}
