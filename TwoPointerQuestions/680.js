// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

//basically return true or false if by removing one character you can still make it a palindrome

//first well you maKE THE damn function



var validPalindrome = function(s) {
    let left = 0; //normal two pointer solution start left
    let right = s.length - 1; //end right


    //we will come back to this later
    function isPalindrome(substring, left, right){ // this function will receive the same string we had previously but skipping the one element that did not repeat
        while(left < right){ //so we basically just do the same thing 
            if(substring[left] != substring[right]){
                return false; //and if the next one is not a palindrome then we return false
            }
            left++; //and if it is equal then we just keep on the loop
            right--;
        
        }
        //and once it ends while being a palindrome it will return true
        return true;

    }

    //then we run the while also part of two pointer solution
    while(left < right){ 
        if(s[left] == s[right]){ //if they are equal to each other then lets reduce it so
            left++; //go one index forward
            right--; //one index back
        }

        
        else{ // now if they are not equal to each other
            if(isPalindrome(s, left + 1, right)){ //then call the function
                return true; //so if the one above is true then we will end the program as its being true
            }

            if(isPalindrome(s, left, right - 1)){ //call teh function again skipping the index we are currently faced with being different
                return true; //and  if its a palindrome then we return truie

            }

            return false; //if after going through these and we still return false then it means that its not a palindrome even after removing certain elements
        }
    } 
    return true

}