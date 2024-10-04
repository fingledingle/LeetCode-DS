// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
//  it reads the same forward and backward. Alphanumeric characters include letters and numbers.


function palindromeChecker(string){
    let newString = string.split(' ').join('').split(',').join('').split(':').join('').toLowerCase();
    console.log(newString)
    let left = 0;
    let right = newString.length - 1;
    while(left < right){
        if(newString[left] != newString[right]){
            return false
        }

        left++;
        right--;
    }
    return true;
}


console.log(palindromeChecker("A man, a plan, a canal: Panama"));




