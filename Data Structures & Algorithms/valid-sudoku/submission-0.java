class Solution {
    public boolean isValidSudoku(char[][] board) {
        Map<Integer, Set<Character>> colMap = new HashMap<>();
        Map<Integer, Set<Character>> rowMap = new HashMap<>();
        Map<String, Set<Character>> squareMap = new HashMap<>();

        int squareX = 0;
        int squareY = 0;
        for(int i=0; i<9; i++){
            squareX = i/3;
            for(int j=0; j<9; j++){
                if(board[i][j] == '.') continue;
                String squareKey = (i/3) + "," + (j/3);

                if(colMap.computeIfAbsent(i, k -> new HashSet<>()).contains(board[i][j]) || 
                rowMap.computeIfAbsent(j, k -> new HashSet<>()).contains(board[i][j]) ||
                squareMap.computeIfAbsent(squareKey, k -> new HashSet<>()).contains(board[i][j])) {
                    return false;
                }

                colMap.get(i).add(board[i][j]);
                rowMap.get(j).add(board[i][j]);

                squareMap.get(squareKey).add(board[i][j]);
            }
        }
        return true;
    }
}
