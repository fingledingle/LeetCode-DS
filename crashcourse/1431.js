/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let copy = [...candies].sort((a,b) => a -b)
    let max = copy[candies.length - 1];
    let ans = [];

    for(let i = 0; i < candies.length; i ++){
        ans.push(candies[i] + extraCandies >= max)
    }

    return ans


};