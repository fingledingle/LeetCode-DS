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
    let left1 = m - 1; //that will be the last elemement of the array nums1
    let left2 = n - 1; //that will be the last element of the array nums2
    let k = m + n - 1; //that will be the lenght since the quantity of numbers in the firt array + the quantity of numbers in the second array will be = the new array length

    while(left2 >= 0) {
        if(left1 >= 0 && nums1[left1] > nums2[left2]) { //if the number in the first array is bigger than the number in the second array then
            nums1[k] = nums1[left1]; //the number at index (last index) will be equals the number at the index of left1
            k--; //then obviously we drecrease the value of k so the while can keep going
            left1-- //and we also decrease the value of left1
        }

        else{ //if the number at that index is not bigger than we do this
            nums1[k] = nums2[left2]; //the number at the last index will be equals the number at the second array index
            k--; //then we decrease the value of k
            left2--; //then we decreasse the valeu of left2;
        }
    }

};