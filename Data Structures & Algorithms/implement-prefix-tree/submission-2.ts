class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class PrefixTree {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let curr = this.root;
        for(let c of word){
            if(!curr.children.has(c)) {
                curr.children.set(c, new TrieNode());
            }
            curr = curr.children.get(c);
        }
        curr.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let curr = this.root;
        for(let c of word) {
            if(!curr.children.has(c)){
                return false;
            }
            curr = curr.children.get(c);
        }
        return curr.isEndOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let curr = this.root;
        for(let c of prefix) {
            if(!curr.children.has(c)){
                return false;
            }
            curr = curr.children.get(c);
        }
        return true;
    }
}
