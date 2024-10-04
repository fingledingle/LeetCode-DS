/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let left1 = 0;
    let left2 = 0;
    let newArr = []
    let answer = ''
    while(left1 < nums1.length || left2 < nums2.length){
        if(left1 < nums1.length &&  (left2 >= nums2.length || nums1[left1] < nums2[left2])){
            newArr.push(nums1[left1]);
            left1++;
        }

        else{
            newArr.push(nums2[left2]);
            left2++;
        }
    }

    if(newArr.length % 2 !== 0){
        answer = newArr[Math.floor((newArr.length - 1) / 2)];
    }

    else{
        console.log('hello')
        const mid1 = newArr[(newArr.length / 2) - 1];
        const mid2 = newArr[(newArr.length / 2)];
        answer = (mid1 + mid2 ) / 2;
    }

    return Number(answer.toFixed(5));



};