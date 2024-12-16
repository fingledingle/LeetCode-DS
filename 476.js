var findComplement = function(num) {
    normal = num.toString(2).split('');

    for(let i = 0; i < normal.length; i++){
        if(normal[i] == '0'){
            normal[i] = '1'
        } else {
            normal[i] = '0'
        }
    }

    return parseInt(normal.join(''), 2);


};