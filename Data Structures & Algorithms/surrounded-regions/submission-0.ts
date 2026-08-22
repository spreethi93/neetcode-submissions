class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        const ROWS = board.length;
        const COLS = board[0].length;

        function dfs(r, c){
            if(r < 0 || c < 0 || r == ROWS || c === COLS || board[r][c] != 'O') {
                return;
            }
            board[r][c] = 'T';
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(board[r][c] === 'O' && ([0,ROWS-1].includes(r) || [0, COLS - 1].includes(c))){
                    dfs(r,c);
                }
            }
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(board[r][c] == 'O') {
                    board[r][c] = 'X';
                }
            }
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(board[r][c] == 'T') {
                    board[r][c] = 'O';
                }
            }
        }
    }
}
