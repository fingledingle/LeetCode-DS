/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        //we have the middle number
        let mid = Math.floor((left + right) / 2);
        console.log('mid value:', mid)


        //now lets jusst check to make sure the middle number isnt our number 
        if (nums[mid] === target) {
            return mid;

        //if nums[mid] is bigger than our number then we reduce the list form the right
        } else if (nums[mid] > target) {
            console.log('nums[mid]', nums[mid], 'is bigger than target')

            right = mid - 1;
            console.log('right value:', right)
        //if its not then we reduce it from the left
        } else{
            console.log('nums[mid]', nums[mid], 'is smaller than target')

            left = mid + 1;
            console.log('left value', left)
        }
    }

    return left;



};


console.log(searchInsert([1,3,5,6], 2))