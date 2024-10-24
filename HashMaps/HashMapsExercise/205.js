/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const hash1 = new Map();
    const hash2 = new Map();


    for(let i = 0; i < s.length; i++){
        if(!hash1.has(s[i])){
            hash1.set(s[i], i);
            console.log(hash1)
        }
        if(!hash2.has(t[i])){
            hash2.set(t[i], i);
            console.log(hash2)
        }

        if(hash1.get(s[i]) !== hash2.get(t[i])){
            console.log(hash1, hash2)
            return false
        }
        
    }

    return true
};