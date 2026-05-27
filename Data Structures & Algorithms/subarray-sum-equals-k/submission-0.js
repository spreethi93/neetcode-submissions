class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixHashCount = {0:1};
        let maxNoOfArr = 0;
        let currSum = 0;
        for(let n of nums){
            currSum += n;
            const diff = currSum - k;
            if(prefixHashCount[diff]){
                maxNoOfArr += prefixHashCount[diff];
            }
            prefixHashCount[currSum] = 1 + (prefixHashCount[currSum] || 0);
        }
        return maxNoOfArr;
    }
}
