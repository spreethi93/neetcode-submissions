class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const ROWS = board.length;
        const COLS = board[0].length;

        const visited = new Set();

        function dfs(r, c, i) {
            if(i === word.length) return true;
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] != word[i] || visited.has(`${r}-${c}`)) {
                return false;
            }

            visited.add(`${r}-${c}`);
            const res = (dfs(r + 1, c, i + 1) ||
                    dfs(r, c + 1, i + 1) ||
                    dfs(r - 1, c, i + 1) ||
                    dfs(r, c - 1, i + 1))

            visited.delete(`${r}-${c}`);
            return res;
        }

        for(let i = 0; i <= ROWS; i++) {
            for(let j = 0; j <=COLS; j++) {
                if(dfs(i, j, 0)) return true;
            }
        }
        return false;
    }
}
