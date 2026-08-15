class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const dfs = (i) => {
            if (i >= nums.length) {
                return 0;
            }
            return Math.max(dfs(i + 1), nums[i] + dfs(i + 2));
        };
        return dfs(0);
    }
    // rob(nums) {
    //     //[rob1, rob2, n, n+1, ...]
    //     let rob1 = 0;
    //     let rob2 = 0;
    //     for(let num of nums) {
    //         let temp = Math.max(num + rob1, rob2);
    //         rob1 = rob2;
    //         rob2 = temp;
    //     }
    //     return rob2
    // }
}
