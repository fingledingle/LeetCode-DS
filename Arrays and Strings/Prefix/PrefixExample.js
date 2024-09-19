

// Example 1: Given an integer array nums, an array queries where queries[i] = [x, y] 
// and an integer limit, return a boolean array that represents the answer to each query. 
// A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.

// For example, given nums = [1, 6, 3, 2, 7, 2], queries = [[0, 3], [2, 5], [2, 4]], and limit = 13,
//  the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12].


console.log(answerQueries([1,6,3,2,7,2], [[0,3], [2,5], [2,4]], 13))

function answerQueries(nums, queries, limit){
    let prefix = [nums[0]];
    console.log(prefix)
    for(let i = 1; i < nums.length; i++){
        console.log(`the prefix is curretly ${prefix} and the num at the index is ${nums[i]} the prefix has a size of ${prefix.length} so we add ${prefix[prefix.length -1]} to ${nums[i]}`)
        prefix.push(nums[i] + prefix[prefix.length - 1]);

        //given the current array of [1,6,3,2,7,2];
        //we will skip the first index [0] and go directly to 1 so
        //once we done that we have to do the math of the current index nums[i] + prefix[prefix.length - 1];
    }


    console.log(prefix)

    //in the end our prefix should look like this [ 1, 7, 10, 12, 19, 21 ]
    



    let ans = [];
    //grabbing the numbers inside the queries so each of those guys [0,3], [2,5], [2,4]
    for(const[x, y] of queries){
        let curr = prefix[y] - prefix[x] + nums[x];
        console.log(`${prefix[y]} - ${prefix[x]} + ${nums[x]}`)


        //so example cur will be equals prefix[y] which is equals prefix[3] == 12
        //prefix[x] which is equals to prefix[0] ==  1
        //+ nums[x] which is equals to nums[0] == 1
        //so 12 - 1 + 1

        

        console.log(curr)

        ans.push(curr < limit);
    }

    return ans
}





