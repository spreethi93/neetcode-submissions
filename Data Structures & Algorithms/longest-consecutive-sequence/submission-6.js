class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums = new Set(nums);
        let longestSeq = 0;
        
        for(let n of nums) {
            if(!nums.has(n - 1)) {
                let length = 1;
                while(nums.has(n + length)) {
                    length++;
                }
                longestSeq = Math.max(longestSeq, length);
            }
        }

        return longestSeq;
    }
    // longestConsecutive(nums) {
    //     const numSet = new Set(nums);
    //     let longest = 0;
    //     for(let num of nums) {
    //         if(!numSet.has(num - 1)){
    //             let length = 1;
    //             while(numSet.has(num + length)) {
    //                 length++;
    //             }
    //             longest = Math.max(longest, length);
    //         }
    //     }
    //     return longest;
    // }
    // longestConsecutive(nums) {
    //     const numSet = new Set(nums);
    //     let longest = 0;
    //     for(let num of nums) {
    //         if(!nums.includes(num - 1)){
    //             let length = 1;
    //             while(nums.includes(num + length)) {
    //                 length++;
    //             }
    //             longest = Math.max(longest, length);
    //         }
    //     }
    //     return longest;
    // }
}
