class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        let M = grid.length;
        let N = grid[0].length;
        let dpRow = new Array(N).fill(0);
        dpRow[N - 1] = 1;

        for(let i = M - 1; i >= 0; i--) {
            for(let j = N - 1; j >= 0; j--) {
                if(grid[i][j] === 1) {
                    dpRow[j] = 0;
                } else if(!(j + 1) !== N) {
                    dpRow[j] = dpRow[j] + dpRow[j + 1];
                }
            }
        }
        return dpRow[0];
    }
    // uniquePathsWithObstacles(grid) {
    //     let M = grid.length;
    //     let N = grid[0].length;
    //     const memo = Array.from({length: M}, () => Array(N).fill(-1));
    //     function dfs(r,c) {
    //         if(r === M || c === N || grid[r][c] === 1) {
    //             return 0;
    //         }
    //         if(r === M - 1 && c === N - 1) return 1;

    //         if(memo[r][c] !== -1) return memo[r][c];
    //         return memo[r][c] = dfs(r, c + 1) + dfs(r + 1, c);
    //     }
    //     return dfs(0,0);
    // }
}
