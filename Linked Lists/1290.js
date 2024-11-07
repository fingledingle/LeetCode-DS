/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    if(head == null) return head;
    let jeff = head;
    let string = ''
    while(jeff){
        string+=jeff.val;
        jeff = jeff.next;
    }
    return parseInt(string, 2);
};