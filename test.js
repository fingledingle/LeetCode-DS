var mergeTwoLists = function(list1, list2) {
    let left = 0;
    let left2 = 0;
    let ans = []


    let size1 = 0;
    let curr1 = 0
    while(curr1 !== undefined){
        curr1 = list1[size1]
        size1 += 1;
    }

    let size2 = 0;
    let curr2 = 0
    while(curr2 !== undefined){
        curr2 = list2[size2]
        size2 += 1;
    }


    while(left < size1 - 1 && left2 < size2 - 1){
        if(list1[left] <= list2[left2]){
            ans.push(list1[left])
            left++
        }
        if(list2[left2] <= list1[left]){
            ans.push(list2[left2])
            left2++;
        }
    }


    while(left < size1){
        ans.push(list1[left]);
        console.log(list1[left])
        left++ 
    }

    while(left2 < size2){
        ans.push(list2[left2]);
        left2++
    }


    console.log(ans)
};


console.log(mergeTwoLists([1,2,4],[1,3,4]))