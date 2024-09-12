//given 2 arrays sort them and return a new array



//if the arrays are sorted we can use two sum aswell
const firstArray = [1,4,7,20];
const secondArray = [3,5,6]; 


function sortThem(arr1, arr2){
    console.log(arr1)
    console.log(arr2)
    const newArr = []; //making empty new array to return at the end and add them through out hte process
    let left = 0;
    let right = 0;


    while (left < arr1.length && right < arr2.length){
        if(arr1[left] < arr2[right]){
            newArr.push(arr1[left]);
            left ++;
        }

        if(arr2[right] < arr1[left]){
            newArr.push(arr2[right]);
            right++;
        }
    }


    while(arr1[left]){
        newArr.push(arr1[left]);
        left++
    }

    while(arr2[right]){
        newArr.push(arr1[left]);
        left++
    }

    return newArr
}


console.log(sortThem(firstArray, secondArray))


