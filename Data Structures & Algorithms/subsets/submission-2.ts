class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = [];

        const subset = [];
        function dfs(i: number) {
            console.log('i', i);
            if(i >= nums.length) {
                console.log('i >= nums.length', i);
                console.log('final subset', subset);
                res.push([...subset]);
                return
            }

            console.log('subset before pushing', subset);
            subset.push(nums[i]);
            console.log('subset after pushing', subset);
            dfs(i+1);
            subset.pop();
            console.log('subset after popping', subset);
            dfs(i+1);
        }

        dfs(0);

        return res;
    }
}
