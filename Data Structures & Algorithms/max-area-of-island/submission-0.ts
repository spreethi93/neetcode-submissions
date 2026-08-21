class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let maxAreaOfIsland = 0;

        const ROWS = grid.length;
        const COLS = grid[0].length;

        const directions = [
            [1, 0],
            [-1,0],
            [0,1],
            [0, -1]
        ]

        function dfs(r: number, c: number): number {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0) {
                return 0;
            }
            grid[r][c] = 0;
            let area = 1;
            for(let [dr,dc] of directions) {
                area += dfs(r + dr, c + dc);
            }
            return area;
        }

        for(let r=0; r<ROWS; r++) {
            for(let c=0; c<COLS; c++) {
                if(grid[r][c] === 1) {
                    maxAreaOfIsland = Math.max(maxAreaOfIsland, dfs(r, c));
                }
            }
        }

        return maxAreaOfIsland;
    }
}
