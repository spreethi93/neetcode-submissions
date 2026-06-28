class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const resArr = [];
        candidates = candidates.sort((a,b) => a - b);

        function dfs(i, curr, total) {
            if(total === target) {
                resArr.push([...curr]);
                return
            }

            if(total > target || i > candidates.length) { return }

            curr.push(candidates[i]);
            dfs(i + 1, curr, total + candidates[i]);
            curr.pop();
            while(i < candidates.length && candidates[i] === candidates[i + 1]) i++;
            dfs(i + 1, curr, total);

        }

        dfs(0, [], 0);
        return resArr;
    }
}
