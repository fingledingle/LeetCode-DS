



function receiveGuy(string){
    let left = 0;
    let curr = new Set();
    let answer = 0;

    for(let right = 0; right < string.length; right ++){
        while(curr.has(string[right])) {
            curr.delete(string[left]);
            left++;
        }


        curr.add(string[right]);
        answer = Math.max(answer, right - left + 1);
    }

    return answer;
}




console.log(receiveGuy('abcabcbb'))