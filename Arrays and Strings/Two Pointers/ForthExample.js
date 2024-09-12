//Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
//A subsequence of a string is a sequence of characters that can be obtained by deleting some (or none) 
//of the characters from the original string, while maintaining the relative order of the remaining characters. 
//For example, "ace" is a subsequence of "abcde" while "aec" is not.



//so we basically check if in the sequence of ABCDE there's ACE in it (in the following order as ace ofc)
function checkIfSub(arr1, arr2){ //receiving the 2 arrays 
    let left = 0;
    let left2= 0;

    //we first check if the first index at the target array is equals to the firsst index at the second array
    while(left < arr1.length && left2 < arr2.length){ //it will end once the target loop is finished anyway so it will only look till 'ace' exist for example
        if(arr1[left] == arr2[left2]){ //if the letter is the same then we go to the next letter on the target word but also go to the next on the second array
            left++;
        }
        left2++; //if the letter is different we do this anyway



    }
    console.log(arr1.length, left)
    return left == arr1.length; //if the length of the first left is equals to the lenght of the array1 which means it went through all of them then return true
}



console.log(checkIfSub('ace', 'abcde'))