class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if(edges.length > n - 1) return false;
        const visited = new Set();
        const myHashSet = new Map();
        for(let i = 0; i < n; i++) {
            myHashSet.set(i, []);
        }
        for(let [node, child] of edges) {
            myHashSet.get(node).push(child);
            myHashSet.get(child).push(node);
        }

        function dfs(node, parent): boolean {
            if(visited.has(node)) return false;
            visited.add(node);
            for(let child of myHashSet.get(node)){
                if(child == parent) continue;
                if(!dfs(child, node)) {
                    return false;
                }
            }
            visited.delete(node);
            return true;
        }

        return dfs(0, -1);
    }
}
