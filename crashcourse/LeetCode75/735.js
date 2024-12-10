/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    const list = [];


    for(let i = 0; i < asteroids.length; i ++){
        const last = list[list.length - 1];
        const curr = asteroids[i];



        if(!list.length || last < 0 || curr > 0){
            list.push(curr);
        } else if (curr * -1 == last){
            list.pop();
        } else if ( curr * -1 > last){
            list.pop();
            i--;
        }
    }

    return list
};