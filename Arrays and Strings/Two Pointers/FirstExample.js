

// Example 1: Given a string s, return true if it is a palindrome, false otherwise.
// A string is a palindrome if it reads the same forward as backward. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".


//lets pretend that racecar is the string


function checkPalindrome(s){
    let firstString = 0 //the first character
    let lastString = s.length - 1 //the last character

    //in this algorithm we basically just ++ the first and reduce the last until they 
    //meet to see if thye are equal to each other if they are not equal then the loop ends
    while(firstString < lastString){
        if (s[firstString] != s[lastString]){ //checking if thye are differnet then return false
            return false;
        }

        firstString ++; //increasing first character
        lastString --; //decreasing last character
    }

    return true
}

console.log(checkPalindrome('racecar'))


