class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const seen = new Set();
        const myQueue = new Queue();

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] === 0) {
                    myQueue.push([r,c]);
                    seen.add(`${r}-${c}`);
                }
            }
        }

        function addCell(r, c) {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || seen.has(`${r}-${c}`) || grid[r][c] == -1) {
                return;
            }
            seen.add(`${r}-${c}`);
            myQueue.push([r,c]);
        }

        let dist = 0;
        while (!myQueue.isEmpty()) {
            for(let i = myQueue.size(); i > 0 ; i --){
                let [r,c] = myQueue.pop();
                grid[r][c] = dist;
                addCell(r + 1, c);
                addCell(r, c + 1);
                addCell(r - 1, c);
                addCell(r, c - 1);
            }
            dist++;
        }
    }

    /*
    [
        [1,-1,0,1],
        [1,1,1,-1],
        [1,-1,1,-1],
        [0,-1,1,1]
    ]
    [
        [1,-1,0,1],
        [2,2,1,-1],
        [1,-1,1,-1],
        [0,-1,1,1]
    ]
    */
}
