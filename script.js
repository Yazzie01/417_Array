// Put your solution here
let nums = [4, 2, 8];

function divideArray(nums){
    let evenNums = [];
    let oddNums = [];
    for(i = 0; i < nums.length; i++){
        if (nums[i] % 2 == 0){
            evenNums.push(nums[i]);
        }else{
            oddNums.push(nums[i]);
        }
    }
    // Sort numbers in ascending order: [4, 30, 200, 1000]
    evenNums.sort(function(a, b) {
        return a - b;
    });
    console.log("Even numbers:")
    for(i = 0; i < evenNums.length; i++){
    console.log(evenNums[i])
    }
    if(evenNums.length == 0){
        console.log("None"); 
    }
    oddNums.sort(function(a, b) {
        return a - b;
    });
    console.log("Odd numbers:")
    for(i = 0; i < oddNums.length; i++){
    console.log(oddNums[i])
    }
    if(oddNums.length == 0){
        console.log("None"); 
    }
}

divideArray(nums);