class Solution {
    combinationSum(nums, target) {
        const res = [];

        function dfs(i, curr, total) {
            if(total === target) {
                res.push([...curr]);
                return;
            }

            if(total > target || i >= nums.length) {
                return;
            }

            curr.push(nums[i]);
            dfs(i, curr, total + nums[i]);
            curr.pop()
            dfs(i + 1, curr, total);

        }

        dfs(0, [], 0)
        return res;
    }
    // combinationSum(nums, target) {
    //     const resArr = [];

    //     function dfs(i, curr, total) {
    //         if(target === total) {
    //             resArr.push([...curr]);
    //             return;
    //         }
    //         if(total > target || i >= nums.length) {
    //             return;
    //         }

    //         curr.push(nums[i]);
    //         dfs(i, curr, total + nums[i]);
    //         curr.pop();
    //         dfs(i + 1, curr, total);
    //     }

    //     dfs(0, [], 0);

    //     return resArr;
    // }


    // combinationSum(nums, target) {
    //     const res = [];

    //     function dfs(i, cur, total) {
    //         // Base Case 1: Successfully matched the target
    //         if (total === target) {
    //             // In JS, use cur.slice() or [...cur] to make a shallow copy
    //             res.push([...cur]); 
    //             return;
    //         }
            
    //         // Base Case 2: Out of bounds or target exceeded
    //         if (i >= nums.length || total > target) {
    //             return;
    //         }

    //         // Decision 1: Include the current element nums[i]
    //         cur.push(nums[i]);
    //         dfs(i, cur, total + nums[i]); // Note: i stays the same because we can reuse elements
            
    //         // Backtrack: Remove the element before exploring the next branch
    //         cur.pop();
            
    //         // Decision 2: Exclude the current element nums[i] and move to the next index
    //         dfs(i + 1, cur, total);
    //     }

    //     dfs(0, [], 0);
    //     return res;
    // }
}

// Example usage:
// const solver = new Solution();
// console.log(solver.combinationSum([2, 3, 6, 7], 7)); 
// Output: [ [2, 2, 3], [7] ]