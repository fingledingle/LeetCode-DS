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
var deleteDuplicates = function(head) {
    if(head == null) return head;


    let temp = new ListNode(0);
    let curr = temp;
    temp.next = head;

    while(curr.next && curr.next.next){
        if(curr.next.val == curr.next.next.val){
            let curr2 = curr.next.val;
            while(curr.next && curr.next.val == curr2){
                curr.next = curr.next.next
            }
        } else{
            curr = curr.next;
        }
    }
    return temp.next;
};