/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let left = 0;
    let curr = 0;
    let set = new Set();
    let maxSum = 0;


    for(let right = 0; right < nums.length; right++ ){
        curr += nums[right]
        while(set.has(nums[right]) && left < right){
            curr -= nums[left]
            set.delete(nums[left]);
            left++
        }
        set.add(nums[right]);
        if(set.size === k){
            maxSum = Math.max(maxSum, curr);
            set.delete(nums[left]);
            curr -= nums[left];
            left++
        }
    }

    return maxSum
};