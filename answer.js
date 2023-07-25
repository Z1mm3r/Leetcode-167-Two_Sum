var twoSum = function(numbers, target) {

//We can't use compliment maps because of the space constraints but we can use two pointers (take advantage of the sorting)

// Instead of starting with right being length, we could do a binary search for number[0]'s compliment and start from there. 
  let right = numbers.length - 1;

  for(let left = 0; left < numbers.length; left++){
    let compliment = target - numbers[left];
    while(right > 0 && compliment < numbers[right]){
        right--;
    }
    if(numbers[right] == compliment){
        return [left + 1,right + 1];
    }
  }  
};
