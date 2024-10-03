/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let prefix = [gain[0]]
    for (let i = 1; i < gain.length; i++){
        prefix.push(gain[i] + prefix[prefix.length - 1]);
    }

    let answer = Math.max(...prefix);

    return answer >= 1 ? answer : 0;

};