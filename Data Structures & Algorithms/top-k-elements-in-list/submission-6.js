class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};
        const returnArr = []

        for(let s of nums) {
            if(!countMap[s]) {
                countMap[s] = 1;
            } else {
                countMap[s] += 1;
            }
            if(countMap[s] == k) {
                returnArr.push(s);
            }
        }
        return returnArr;



        // const countMap = {};
        // const freq = Array.from({length: nums.length + 1}, () => []);

        // for(const i of nums) {
        //     countMap[i] = (countMap[i] || 0) + 1;
        // }

        // for(const n in countMap){
        //     freq[countMap[n]].push(n);
        // }

        // const res = [];
        // for(let i=freq.length - 1; i>0; i--){
        //     for(const n of freq[i]){
        //         res.push(n);
        //         if(res.length == k) return res;
        //     }
        // }
    }
}