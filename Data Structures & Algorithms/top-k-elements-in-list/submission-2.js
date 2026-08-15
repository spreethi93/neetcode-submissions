class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashObject = {}
        for(let i=0; i<nums.length; i++) {
            if(hashObject[nums[i]]) {
                hashObject[nums[i]]++;
            } else {
                hashObject[nums[i]] = 1;
            }
        }
        const res = [];
        for(let key of Object.keys(hashObject)){
            if(hashObject[key] >= k){
                res.push(key);
            }
        }
        return res;
    }
}
