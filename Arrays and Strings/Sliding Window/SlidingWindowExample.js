// Let's use an integer curr that tracks the sum of the current window. Since the
//  problem wants subarrays whose sum is less than or equal to k, we want to maintain curr <= k. 
//  Let's look at an example where nums = [3, 1, 2, 7, 4, 2, 1, 1, 5] and k = 8



//first le function guy we pass the target number and the array
function guy(nums, k){
    let left = 0; //we set that the left will start as 0 and the same goes for the right it will start with 0 aswell
    let curr = 0; //this is the count so we know how big the array was and which numbers were part of it
    let answer = 0
    for (let right = 0; right < nums.length; right++){//so it always adds to the right so we can keep going to the right on the array
        curr += nums[right]; 
        while (curr > k) { //as long as the curr is not back to being a number less than the target goal we can reduce it multiple times thats why its in a while loop
            curr -= nums[left];
            left++;
        }
        answer = Math.max(answer, right - left + 1); //this will be the lenght of it
    }
    
    
    return answer;
    
}

console.log(guy([3, 1, 2, 7, 4, 2, 1, 1, 5], 8))