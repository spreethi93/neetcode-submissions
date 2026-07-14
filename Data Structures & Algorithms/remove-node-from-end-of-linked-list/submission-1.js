/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = {val:0, next: head};
        let firstPointerEl = head
        let secondPointerEl = dummy;
        for(let i=0; i < n; i++){
            firstPointerEl = firstPointerEl.next;
        }
        while(firstPointerEl !== null) {
            firstPointerEl = firstPointerEl.next;
            secondPointerEl = secondPointerEl.next;
        }
        secondPointerEl.next = secondPointerEl.next.next;
        return dummy.next;
    }
}

