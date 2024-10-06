



function test(nums){
    //first setting the counts map like alwyas
    let counts = new Map();

    //for ech array in this case we have 3
    for(const arr of nums){
        console.log(arr)
        //for each number inside the arrays
        for(const x of arr){
            console.log(x)
            counts.set(x, (counts.get(x) || 0) + 1);
        }
    }

    let ans = [];
    for(const [key, val] of counts){
        if(val === nums.length){
            ans.push(key);
        }
    }

    ans.sort((a, b) => a - b);
    return ans

}





console.log(test([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))