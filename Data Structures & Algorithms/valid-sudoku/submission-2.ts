class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowMap = new Map();
        const colMap = new Map();
        const squareMap = new Map();

        for(let i=0; i<9; i++) {
            for(let j=0; j<9; j++) {
                if(board[i][j] === '.') continue;

                const squareKey = `${Math.floor(i/3)},${Math.floor(j/3)}`;
                if(rowMap.get(i) && rowMap.get(i).has(board[i][j]) ||
                    colMap.get(j) && colMap.get(j).has(board[i][j]) ||
                    squareMap.get(squareKey) && squareMap.get(squareKey).has(board[i][j])
                ) {
                    return false;
                }

                if(!rowMap.get(i)) rowMap.set(i, new Set());
                if(!colMap.get(j)) colMap.set(j, new Set());
                if(!squareMap.get(squareKey)) squareMap.set(squareKey, new Set());

                rowMap.get(i).add(board[i][j]);
                colMap.get(j).add(board[i][j]);
                squareMap.get(squareKey).add(board[i][j]);
            }
        }

        return true;
    }
}
