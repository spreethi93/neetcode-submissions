class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const myQueue = new Queue();
        let freshOranges = 0;

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] === 2) {
                    myQueue.push([r,c]);
                } else if(grid[r][c] == 1) {
                    freshOranges++;
                }
            }
        }

        function rotOranges(r, c) {
            if(r < 0 || c < 0 || r === ROWS || c === COLS || grid[r][c] !== 1) {
                return;
            }
            grid[r][c] = 2;
            myQueue.push([r,c]);
            freshOranges--;
        }

        let minute = 0;

        while(!myQueue.isEmpty() && freshOranges > 0) {
            for(let i = myQueue.size(); i > 0; i--) {
                const [r, c] = myQueue.pop();
                rotOranges(r + 1, c);
                rotOranges(r - 1, c);
                rotOranges(r, c + 1);
                rotOranges(r, c - 1);
            }
            minute++;
        }

        return freshOranges === 0 ? minute : -1;
    }
}
