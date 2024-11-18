/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let left = 0;
    let curr = 0;
    let ans = 0;

    for(let right = 0; right < arr.length; right++){
        curr += arr[right];
        if(right - left === k){
            curr -=arr[left];
            left++
        }

        if((right - left) + 1 === k){
            if(curr/k >= threshold){
                ans++;
            }
        }  
    }
    return ans;
};