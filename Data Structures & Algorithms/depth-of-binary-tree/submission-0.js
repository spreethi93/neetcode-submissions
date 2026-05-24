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
     * @return {number}
     */
    // maxDepth(root) {
    //     if(root === null) return 0;

    //     return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    // }

    maxDepth(root) {
        const stack = [[root,1]];
        let maxDepth = 0;

        while(stack.length > 0){
            const [currentNode, depth] = stack.pop();

            if(currentNode != null){
                maxDepth = Math.max(maxDepth, depth);
                stack.push([currentNode.left, depth + 1]);
                stack.push([currentNode.right, depth + 1]);
            }
        }

        return maxDepth;
    }
}
