let reverseList = head => {
    let prev = null;
    let curr = head;
    while (curr) {
        let nextNode = curr.next; // first, make sure we don't lose the next node
        //           next
        // 1          2          3
        curr.next = prev;         // reverse the direction of the pointer
        //           next
        // 1          2          3
        prev = curr;              // set the current node to prev for the next node
        // prev      next
        // 1          2          3
        curr = nextNode;          // move on
    }

    return prev;
}