//Merge Sorted Array



function Merge(arr1, arr2){
    let left1 = 0;
    let left2 = 0;
    let curr = [];

    arr1 = arr1.filter(num => num !== 0);
    arr2 = arr2.filter(num => num !== 0);


    console.log(arr1.length)
    while(left1 < arr1.length && left2 < arr2.length){
        if(arr1[left1] < arr2[left2]){
            curr.push(arr1[left1]);
            left1++;
        }

        if(arr2[left2] < arr1[left1]){
            curr.push(arr2[left2]);
            left2++;
        }

        if(arr1[left1] == arr2[left2]){
            curr.push(arr1[left1]);
            left1++;
            curr.push(arr2[left2]);
            left2++;
        }
    }

    console.log(left1)
    while(left1 < arr1.length){
        curr.push(arr1[left1]);
        left1++;
    }

    while(left2 < arr2.length){
        curr.push(arr2[left2]);
        left2++;
    }


    return curr;
    
}

console.log(Merge([1,2,3,0,0,0], [2,5,6]))


//better approach
var merge = function(nums1, m, nums2, n) {
    let left1 = m - 1;
    let left2 = n - 1;
    let k = m + n - 1;

    while(left2 >= 0) {
        if(left1 >= 0 && nums1[left1] > nums2[left2]) {
            nums1[k--] = nums1[left1--];
        }

        else{
            nums1[k--] = nums2[left2--];
        }
    }

};