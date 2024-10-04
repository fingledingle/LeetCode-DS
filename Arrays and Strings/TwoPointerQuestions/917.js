






function reverseOnlyLetters(string){
    let left = 0;
    let left1 = 0;
    let arr = []
    let arr2 = []

    for(left = 0; left < string.length; left++){
        if(/[a-zA-Z]/.test(string[left])){
            arr.push(string[left]);
        }
    }

    for (left = 0; left < string.length; left ++){
        if(/[a-zA-z]/.test(string[left])){
            arr2.push(string[left]);
        }

        else{
            arr2.push(arr[left1]);
            left1++
        }
    }

    return arr2.toString();
}


console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'))
