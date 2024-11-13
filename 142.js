var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            while (fast !== head) {
                head = head.next;
                fast = fast.next;
            }
            return head;
        }
    }
    return null;
};