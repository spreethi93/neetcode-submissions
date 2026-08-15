class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

class PrefixTree {
    root;

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
            curr = curr.children.get(c)
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
            if(curr.children.has(c)){
                curr = curr.children.get(c);
            } else {
                return false;
            }
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
            if(curr.children.has(c)){
                curr = curr.children.get(c);
            } else {
                return false;
            }
        }
        return true;
    }
}
