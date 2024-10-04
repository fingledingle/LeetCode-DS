var reverseVowels = function(s) {
    let start = 0;
    let end = s.length - 1;
    let vowels = new Set ('aeiouAEIOU');
    let answer = [...s];

    while(start < end){
        while(start < end && !vowels.has(s[start])){
            start++;
        }

        while(start < end && !vowels.has(s[end])){
            end--;
        }
        
        let temp = answer[start];
        answer[start] = answer[end];
        answer[end] = temp;
        console.log(answer)


        start++;
        end--;
    }

    return answer.join('');
    


}





console.log(reverseVowels('leetcode'));