class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const length = nums.length;
        const prefixProd = new Array(length);
        prefixProd[0] = 1;
        const suffixProd = new Array(length);
        suffixProd[length - 1] = 1;
        const resArr = new Array(length);

        for(let i = 1; i < length; i++) {
            prefixProd[i] = prefixProd[i - 1] * nums[i - 1];
        }

        for(let i = length - 2; i >= 0; i--) {
            suffixProd[i] = suffixProd[i + 1] * nums[i + 1];
        }

        for(let i = 0; i < length; i++) {
            resArr[i] = prefixProd[i] * suffixProd[i];
        }

        return resArr;
    }
    // productExceptSelf(nums) {
    //     let prefix = new Array(nums.length);
    //     let postfix = new Array(nums.length);
    //     let resArr = new Array(nums.length);

    //     prefix[0] = 1;
    //     postfix[nums.length - 1] = 1;

    //     for(let i=1; i<nums.length; i++){
    //         prefix[i] = prefix[i-1] * nums[i-1];
    //     }

    //     for(let j=nums.length-2; j>=0; j--){
    //         postfix[j] = postfix[j+1] * nums[j+1];
    //     }

    //     for(let i=0; i<nums.length; i++){
    //         resArr[i] = prefix[i] * postfix[i];
    //     }

    //     return resArr;
    // }
    // productExceptSelf(nums) {
    //     const n = nums.length;
    //     const pref = new Array(n).fill(1);
    //     const suff = new Array(n).fill(1);
    //     const res = new Array(n).fill(1);;

    //     for(let i=1; i<n; i++){
    //         pref[i] = pref[i-1]*nums[i-1];
    //     }

    //     for(let i=n-2; i>=0; i--){
    //         suff[i] = suff[i+1]*nums[i+1];
    //     }

    //     for(let i=0; i<n; i++){
    //         res[i] = pref[i]*suff[i];
    //     }

    //     return res;
    // }
}
