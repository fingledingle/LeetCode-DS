/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    let carry = 0;

    while(l1 != null || l2 != null || carry != 0){

        //this guy will be responsible for carrying the number to the other digit
        //example if carry is 11 it will cary 1;
        let sum = carry;
        //then we chekc if l1 is null
        //if its not then we make it so the sum is the number that was carried if there's any
        //+the current value then we proceed to point to the next value
        if(l1 != null){
            sum+= l1.val;
            l1 = l1.next;
        }
        //then we check if l2 is null
        //same for l2
        if(l2 != null){
            sum+= l2.val;
            l2 = l2.next;
        }

        //we check if theres gonna be any number to be carried to the next one
        carry = Math.floor(sum / 10);
        //isolating the last digit so for example it is 13 then it isolates 3
        //and carries the one to the other side
        let num = sum%10;
        //responsible for making the new node;
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next
};