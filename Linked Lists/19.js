/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head === null) return head;

    let fast = head;
    let slow = head;

    for(let i = 0; i < n; i++){
        fast = fast.next;
    }
    if(!fast) return head.next

    while(fast && fast.next){
        fast = fast.next;
        slow = slow.next
    }
    slow.next = slow.next.next
    return head;
};