class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        function dp(i) {
            if(i >= nums.length) {
                return 0;
            }

            return Math.max(nums[i] + dp(i+2), dp(i+1));

        }
        return dp(0);
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
