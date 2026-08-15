class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */

    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string) {
        let curr = this.root;
        for(let c of word) {
            if(!curr.children.has(c)) {
                curr.children.set(c, new TrieNode);
            }
            curr = curr.children.get(c);
        }
        curr.isEndOfWord = true;
    }

    findWords(board: string[][], words: string[]): string[] {

        for(let word of words) {
            this.insert(word);
        }

        const ROWS = board.length;
        const COLS = board[0].length;
        const res = [];
        const visited = new Set();

        function dfs(r, c, node, word) {
            if(r < 0 || c < 0 ||
            r == ROWS || c == COLS ||
            visited.has(`${r}-${c}`) || !node.children.has(board[r][c])) {
                return false;
            }

            visited.add(`${r}-${c}`);
            node = node.children.get(board[r][c]);
            word += board[r][c];
            if(node.isEndOfWord) {
                res.push(word);
            }

            dfs(r - 1,c, node, word);
            dfs(r + 1,c, node, word);
            dfs(r,c - 1, node, word);
            dfs(r,c + 1, node, word);
            visited.delete(`${r}-${c}`);
        }

        for(let i=0; i<board.length; i++) {
            for(let j=0; j<board[i].length; j++) {
                dfs(i, j, this.root, '');
            }
        }
        
        return Array.from(new Set(res));

    }
}
