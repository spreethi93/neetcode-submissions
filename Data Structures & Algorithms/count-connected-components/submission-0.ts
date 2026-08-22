class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const visited = new Set();
        const myHashSet = new Map();
        for(let i = 0; i < n; i++) {
            myHashSet.set(i, []);
        }
        for(let [node, child] of edges) {
            myHashSet.get(node).push(child);
            myHashSet.get(child).push(node);
        }

        let components = 0;

        function dfs(node): boolean {
            for(let child of myHashSet.get(node)){
                if(!visited.has(child)) {
                    visited.add(child);
                    dfs(child)
                }
            }
            return true;
        }

        for(let i = 0; i < n; i++) {
            if(!visited.has(i)) {
                visited.add(i);
                components++;
                dfs(i);
            }
        }

        return components;
    }
}
