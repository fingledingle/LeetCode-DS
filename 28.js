
var strStr = function(haystack, needle) {
    //in case needle which is our word is bigger than the haystack
    if(haystack.length < needle.length) return -1;

    //now we make a loop that is as big or equal the length of our haystack -         needle.length
    //we do that because we only want the first time it appears and if it does         showu p at the end we dont really need it so we can assume that if it            has the end the same as it we can just ignore it
    for(let i = 0; i <= haystack.length - needle.length; i++){
        if(haystack.substring(i, i+needle.length) === needle){
            return i;
        }
    }


    return -1;
};
