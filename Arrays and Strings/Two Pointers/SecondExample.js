//Given a sorted array see if you can find the 2 numbers that sumd are equal the target number (13)


//so we have the target we wanna find which is 13


function areThereNumbers(arr){
    let firstNumber = 0; //left 
    let lastNumber = arr.length - 1; //right

    while(firstNumber < lastNumber){ //while left is less than the right
        let summarize = arr[firstNumber] + arr[lastNumber] //the summarize of the two numbers
        if(summarize > 13) lastNumber --; //if the summarize of the two numbers is less than the target than it means the last number is too big so we reduce it
        if (summarize < 13) firstNumber ++; //if too small then we add it up to the first one bc it means the first one is too small
        if (summarize == 13) return ([arr[firstNumber], arr[lastNumber]]); //if its equal to target then return it 
    }

    return false; //if it went through the whole thing and didnt find it it means that theres no number that would do that
    
}




console.log(areThereNumbers([1,2,3,6.8,10,14,15]));