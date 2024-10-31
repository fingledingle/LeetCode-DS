function jeffrey(head){
    let slow = head;
    let fast = head;

    for(i = 0; i < k; i++){
        fast = fast.next
    }

    while(fast){
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}