/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();

    for(let i = 0; i < nums.length; i ++){
        if(i > k){
            //deleting the first item
            set.delete(nums[i - k - 1])
        }

        if(set.has(nums[i])){
            return true;
        }

        set.add(nums[i]);
    }



    return false;
};