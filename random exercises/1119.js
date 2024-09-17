var removeVowels = function(s) {
    let vowel = new Set('aeiouAEIOU');
    let answer = ''
    for(let i = 0; i < s.length; i++){
        if(vowel.has(s[i])){
            continue
        }

        else{
            answer += s[i]
        }



    }

    return answer


};



console.log(removeVowels('bigchungus'));