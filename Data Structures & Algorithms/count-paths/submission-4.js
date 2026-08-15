class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        function dfs(i,j) {
            if(i === m - 1 && j === n - 1) {
                return 1;
            }
            if( i >= m || j >= n) {
                return 0;
            }

            return dfs(i + 1, j) + dfs(i, j + 1);
        }

        return dfs(0,0);
    }
    // uniquePaths(m, n) {
    //     let row = new Array(n).fill(1);

    //     for(let i = 0; i < m - 1; i++) {
    //         let newRow = new Array(n).fill(1);
    //         for(let j = n - 2; j >= 0; j--) {
    //             newRow[j] = newRow[j+1] + row[j];
    //         }
    //         row = newRow;
    //     }

    //     return row[0];
    // }
}
