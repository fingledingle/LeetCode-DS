/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let ans = Array(nums.length).fill(1);
    let left = 1;
    for(let i = 0; i < nums.length; i++){
        ans[i] *= left;
        left *= nums[i];
    }

    let right = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        ans[i] *= right;
        right *= nums[i]
    }

    return ans






};