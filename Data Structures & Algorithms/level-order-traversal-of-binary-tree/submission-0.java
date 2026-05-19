/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {

    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        Deque<TreeNode> queue = new ArrayDeque<TreeNode>();
        if(root != null) {
            queue.add(root);
        }
        while(!queue.isEmpty()) {
            List<Integer> tempList = new ArrayList<>();
            Integer queueSize = queue.size();
            for(int i=0 ; i<queueSize ; i++) {
                TreeNode curr = queue.removeFirst();
                tempList.add(curr.val);
                if(curr.left != null) {
                    queue.addLast(curr.left);
                }
                if(curr.right != null) {
                    queue.addLast(curr.right);
                }
            }
            result.add(tempList);
        } 
        return result;   
    }
}
