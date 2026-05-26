class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffMap = new Map();
        for(let i = 0; i < nums.length; i++) {
            let tempDiff = target - nums[i];
            if(diffMap.has(tempDiff)) {
                return [ i, diffMap.get(tempDiff)];
            } else {
                diffMap.set(nums[i], i);
            }
        }
        return [];
    }
    // twoSum(nums, target) {
    //     const diffMap = new Map();

    //     for(let i=0; i<nums.length; i++) {
    //         const diff = target - nums[i];
    //         if(diffMap.has(diff)) {
    //             return [diffMap.get(diff), i];
    //         }
    //         diffMap.set(nums[i], i);
    //     }

    //     return [];
    // }
}
