/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length -1;
    while(left <= right){
        
        if(nums[left] < target){
            left++;
        } 

        if(nums[right] > target){
            right--;
        } 

        if(nums[left] == target && nums[right] == target){
            return [left, right];


        }
        
    }

    return [-1, -1]

};