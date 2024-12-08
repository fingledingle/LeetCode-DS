/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    prefix = [gain[0]]
    for(let i = 1; i < gain.length; i ++){
        prefix.push(gain[i] + prefix[i - 1]);
    }

    ans = Math.max(...prefix);

    return ans >= 1 ? ans : 0




};