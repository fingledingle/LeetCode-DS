/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let temp = new ListNode(0);
    let curr = temp;
    temp.next = head;
    
    while(curr && curr.next){
        if(curr.next.val === val){
            curr.next = curr.next.next;
        } else{
            curr = curr.next;
        }
    }

    return temp.next;
};