class TrieNode {
    children: Map<string, TrieNode>;
    endOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

class WordDictionary {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let curr = this.root;
        for(let c of word) {
            if(!curr.children.has(c)) {
                curr.children.set(c, new TrieNode);
            }
            curr = curr.children.get(c);
        }
        curr.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        function dfs(j, root) {
            let curr = root;
            for(let i=j; i < word.length; i++) {
                if(word[i] === '.') {
                    for(let child of curr.children.values()) {
                        if(dfs(i+1, child)) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    if(!curr.children.has(word[i])) {
                        return false;
                    }
                    curr = curr.children.get(word[i]);
                }
            }
            return curr.endOfWord;
        }

        return dfs(0, this.root);

    }
}
