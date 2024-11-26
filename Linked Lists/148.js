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
var sortList = function(head) {
    if(head == null) return head;

    //start by making a pointer so i can throw everything inside the list
    //without modifying the current value of head;
    let ptr = head;
    let arr = [];

    //loop in order to fill the list
    while(ptr){
        arr.push(ptr.val);
        ptr = ptr.next;
    }


    //sort the list so ican easily go through it later
    arr.sort((a,b) => a-b);

    //making the starting value of the new head by making a node
    //with the first value of the list we just created
    let newHead = new ListNode(arr[0]);

    //now we have  the value for the new head
    head = newHead;

    //we make a temp so we can do another loop ga
    temp = head;



    //simple loop guy since we already have the first value of the head we start from 1
    for(let i = 1; i < arr.length; i++){
        //we make a node or else we wouldnt be able to add it to our head
        newNumber = new ListNode(arr[i]);
        //then we call that temp.next will be equal Node of the array value at position i
        temp.next = newNumber;
        //and we keep the loop going for the node value by going to the next one
        temp = temp.next;
    }

    //then we return the sorted head;
    return head;


};