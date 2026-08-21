/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        if(node === null) return null;
        const oldToNewMap = new Map<Node,Node>();

        function dfs(node: Node): Node {
            if(oldToNewMap.has(node)) {
                return oldToNewMap.get(node)
            }

            const copy = new Node(node.val);
            oldToNewMap.set(node, copy);

            for(let nei of node.neighbors) {
                copy.neighbors.push(dfs(nei))
            }
            return copy
        }

        return dfs(node);
    }
}
