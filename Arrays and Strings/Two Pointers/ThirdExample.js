//given 2 arrays sort them and return a new array



//if the arrays are sorted we can use two sum aswell
const firstArray = [1,4,7,20];
const secondArray = [3,5,6]; 


function sortThem(arr1, arr2){
    const newArr = []; //making empty new array to return at the end and add them through out hte process
    let left = 0; //starting the left for the first array
    let left2 = 0; //starting the left for the second array


    while (left < arr1.length && left2 < arr2.length){ //firsst while loop to sort them both without thinking if one array is bigger or not
        if(arr1[left] < arr2[left2]){ //if the number at the certain index is smaller than the number on the second array at a certain index then add the first number to new list
            newArr.push(arr1[left]);
            left ++;
        }

        if(arr2[left2] < arr1[left]){ //if the number at the certain index is smaller than the number on the first array at a certain index then add the second number to new list
            newArr.push(arr2[left2]);
            left2++;
        }
    }

    //then after the first while is done you gotta do these to clear out the rest of the list knowing only one of them will be run depending on which array is bigger

    while(arr1[left]){ //loop through the rest of the first array to add all of it to the list
        newArr.push(arr1[left]);
        left++
    }

    while(arr2[left2]){ //loop through the rest of the second array to add all of it to the list
        newArr.push(arr1[left]);
        left++
    }

    return newArr;
}


console.log(sortThem(firstArray, secondArray))


///another way of doing this guy and better btw

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