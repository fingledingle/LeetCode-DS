var numSubseq = function(nums, target) {
    let left = 0;
    let curr = 0;
    let answer = 0;
    for(let right = 0; right < nums.length; right++){
        curr += nums[right];

        while(curr > target){
            curr-= nums[left];
        }
        answer++;
    }

    return answer

};


console.log(numSubseq([3,3,6,8], 10));

//i dont get it
// var numSubseq = function(nums, target) {
//     const MOD = 1e9 + 7;
//     nums.sort((a, b) => a - b);  // Sort the array to use two pointers.
    
//     let left = 0, right = nums.length - 1;
//     let answer = 0;
    
//     // Precompute powers of 2 up to nums.length
//     let power = new Array(nums.length).fill(1);
//     for (let i = 1; i < nums.length; i++) {
//         power[i] = (power[i - 1] * 2) % MOD;
//     }

//     while (left <= right) {
//         if (nums[left] + nums[right] <= target) {
//             // If the sum of the min and max is <= target,
//             // count all subsequences between left and right.
//             answer = (answer + power[right - left]) % MOD;
//             left++;  // Move left pointer to try the next bigger minimum.
//         } else {
//             right--;  // If the sum is too big, try a smaller maximum.
//         }
//     }

//     return answer;
// };

// console.log(numSubseq([3, 3, 6, 8], 10));  // Example test case
