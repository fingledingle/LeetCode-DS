/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let curr = 0;
    let set = new Set(['a', 'e', 'i', 'o', 'u']);

    for(let i = 0; i < k; i++){
        curr += set.has(s[i]) ? 1 : 0;
    }

    ans = curr;

    for(let right = k; right < s.length; right ++){
        curr+= set.has(s[right]) ? 1 : 0;
        curr -= set.has(s[right - k]) ? 1 : 0;
        ans = Math.max(ans, curr)
    }


    return ans
};