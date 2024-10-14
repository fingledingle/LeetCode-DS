/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine){
        return false
    }


    const hash = new Map();


    for(let i = 0; i < magazine.length; i++){
        let letter = magazine[i]
        hash.set(letter, (hash.get(letter) || 0) + 1);
    }


    for(letter of ransomNote){
        if(hash.has(letter)){
            if(hash.get(letter) <= 1){
                hash.delete(letter)
            } 
            else{
            hash.set(letter, hash.get(letter) - 1);
            }
        } else{
            return false
        }
    }

    return true
};