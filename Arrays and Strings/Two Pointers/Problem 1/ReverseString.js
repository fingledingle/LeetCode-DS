// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.


// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]


let s = ["h","e","l","l","o"];

function receiveLeGuys(arr){
    let left = 0;
    let right = arr.length - 1;


    while(left < right){
        arr[left] = arr[right];
        arr[right] = arr[left];
        left++
        right--
    }

}


receiveLeGuys(s)