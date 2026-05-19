class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};
        const freq = Array.from({length: nums.length + 1}, () => []);

        for(const s of nums) {
            countMap[s] = (countMap[s] || 0) + 1;
        }

        for(const s in countMap) {
            freq[countMap[s]].push(s);
        }

        const returnArr = [];
        for(let i=freq.length-1; i>0; i--) {
            for(const s of freq[i]) {
                returnArr.push(s);
                if(returnArr.length === k) {
                    return returnArr;
                }
            }
        }






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