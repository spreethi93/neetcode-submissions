class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        let M = grid.length;
        let N = grid[0].length;
        const memo = Array.from({length: M}, () => Array(N).fill(-1));
        function dfs(r,c) {
            if(r === M || c === N || grid[r][c]) {
                return 0;
            }
            if(memo[r][c]) return memo[r][c];
            return memo[r][c] = dfs(r, c + 1) + dfs(r + 1, c);
        }
        return dfs(0,0);
    }
}
