// Example 4: Given an integer array nums and an integer k, find the sum of the subarray with the largest sum whose length is k.



//lets say that the size of our window is 4
//[3, -1, 4, 12 -8, 5, 6] and this is our array



//we start by making the function and setting the array and the target number
function FixedWindowGuy(nums, k){

    let curr = 0; //we set the curr as 0 since we will be adding to it latr on
    for (let i = 0; i < k; i++) { //we run a for loop until the i is equal the target as in we want our array to be not bigger than 4
        curr += nums[i]; //so once we know we have 4 items inside our array of 4 we can move on to the next step
    }
    
    let ans = curr;
    for (let i = k; i < nums.length; i++) {
        curr += nums[i] - nums[i - k];
        ans = Math.max(ans, curr);
    }
    
    return ans;
}





console.log(FixedWindowGuy([3, -1, 4, 12 -8, 5, 6], 4))
