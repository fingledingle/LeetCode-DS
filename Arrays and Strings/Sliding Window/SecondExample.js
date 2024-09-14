// Example 2: You are given a binary string s (a string containing only "0" and "1").
//  You may choose up to one "0" and flip it to a "1". What is the length of the longest substring achievable that contains only "1"?

// For example, given s = "11001011", the answer is 5. If you perform the flip at index 2, the string becomes 1111100111


//so in this one we want to find the longest stream containing only one 0
function find_length(stringGuy){ //we make the function and pass the string or the array
    let left = 0; //left pointer starts with 0
    let curr = 0; //current value 0 (we will be increasing it at some point)
    let answer = 0; //and the answer is always the same since it only serves us to return the length of the list
    for(let right = 0; right < stringGuy.length; right++){  //making the loop so the right gets bigger
        if (stringGuy[right] == 0){ //if the current guy is 0 then we add 1 to the current 
            curr ++;
        }

        while (curr > 1){ //if the once current guy is bigger than 1 so 2 then we start taking from the left for example
            //1 -> 1 -> 0 -> 0 <- found another 0 so it means curr is now 2 so we start removing from the left 
            if(stringGuy[left] == 0){
                curr --;
                //so it should look like 
                //X -> 1 -> 0 -> 0
                //X -> X -> 0 -> 0
                //X -> X -> X -> 0
                //then now we can go back to adding  to the right since curr is 1 again
            }
            left += 1
        }
        answer = Math.max(answer, right - left + 1)
    }

    return answer
}

console.log(find_length('11001011'))



