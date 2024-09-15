// 167. Two Sum II - Input Array Is Sorted


var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while(left < right){
        if(numbers[left] + numbers[right] == target){
            break;
        }

        if(numbers[left] + numbers[right] > target){
            right--;
        }

        if(numbers[left] + numbers[right] < target){
            left++;
        }
    }
    return [left + 1, right + 1];
};

console.log(twoSum([-1,0], -1))



