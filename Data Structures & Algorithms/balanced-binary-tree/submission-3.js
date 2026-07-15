/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        
        function dfs(node) {
            // Base case: An empty tree is balanced and has a height of 0
            if (node === null) return [true, 0];

            let left = dfs(node.left);
            let right = dfs(node.right);

            // Check if left subtree is balanced, right subtree is balanced, 
            // AND the height difference between them is no more than 1
            let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

            // Return [isCurrentSubtreeBalanced, currentHeight]
            return [balanced, 1 + Math.max(left[1], right[1])];
        }

        return dfs(root)[0];
    }
}
