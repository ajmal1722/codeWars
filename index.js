// Create a function that takes an integer as an argument and returns "Even" for even 
// numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 === 0) {
      return 'Even'
    } else {
      return 'Odd'
    }
  }

  
//   An isogram is a word that has no repeating letters, consecutive or 
// non-consecutive. Implement a function that determines whether 
// a string that contains only letters is an isogram. Assume the
//  empty string is an isogram. Ignore letter case.

//   Example: (Input --> Output)
  
//   "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
  
//   isIsogram "Dermatoglyphics" = true
//   isIsogram "moose" = false
//   isIsogram "aba" = false

function isIsogram(str) {
    if (str.length === 0) {
      // An empty string is considered an isogram
      return true;
    }
  
    const strLowerCase = str.toLowerCase();
    const letterSet = new Set();
  
    for (let i = 0; i < strLowerCase.length; i++) {
      const currentLetter = strLowerCase[i];
  
      if (letterSet.has(currentLetter)) {
        // Duplicate letter found
        return false;
      }
  
      // Add the current letter to the set
      letterSet.add(currentLetter);
    }
  
    // No duplicate letters found
    return true;
  }
 

  // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  // Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
  
  // Additionally, if the number is negative, return 0.
  
  // Note: If the number is a multiple of both 3 and 5, only count it once.
  
  function solution(number){
    let sum = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    console.log(sum)
    return sum;
  }


//  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}