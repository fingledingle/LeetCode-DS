/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head == null) return head;
    let temp1 = head;
    let temp2 = head.next
    let dum = temp2;

    while(temp2 && temp2.next){
        temp1.next = temp2.next;
        temp1 = temp1.next;
        temp2.next = temp1.next;
        temp2 = temp2.next; 
    }

    temp1.next = dum;

    return head;
};