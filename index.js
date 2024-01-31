// 1.
// Create a function that takes an integer as an argument and returns "Even" for even 
// numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 === 0) {
      return 'Even'
    } else {
      return 'Odd'
    }
  }

  // 2.
// An isogram is a word that has no repeating letters, consecutive or 
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
 

  // 3.
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



  // 4.
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

 // 5.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num.toString().split('').reduce((t, c) => c * t);
  }
  return i;
}


//6.
// Your task is to make a function that can take any non-negative integer as an argument and return
// it with its digits in descending order. Essentially, rearrange the digits to create 
// the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  return parseInt(n.toString().split('').sort((a, b) => b - a).join(''))
}


// 7.
// Given n, take the sum of the digits of n. If that value has more 
// than one digit, continue reducing in this way until a single-digit 
// number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
  // Keep looping until the sum is a single digit
  while (n >= 10) {
    // Convert the number to a string to get its digits
    const nStr = n.toString();

    // Calculate the sum of the digits
    n = nStr.split('').reduce((acc, val) => acc + parseInt(val), 0);
  }

  // Return the single-digit sum
  return n;
}
/*************************               ****************************** */
// using recursion
function digitalRoot(n) {
  // Convert the number to a string to get its digits
  const nStr = n.toString();

  // Calculate the sum of the digits
  const sum = nStr.split('').reduce((acc, val) => acc + parseInt(val), 0);

  // If the sum has more than one digit, recursively call the function with the sum
  // Otherwise, return the single-digit sum
  return sum >= 10 ? digitalRoot(sum) : sum;
}



// 8.
// Your task is to sort a given string. Each word in the string will contain 
// a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the 
// input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  // If the input string is empty, return an empty string
  if (words === "") {
    return "";
  }

  // Split the string into words
  const wordArray = words.split(" ");

  // Sort the words based on the number within each word
  const sortedWords = wordArray.sort(function (a, b) {
    return a.match(/\d/) - b.match(/\d/);
  });

  // Join the sorted words into a string and return
  return sortedWords.join(" ");
}


// 9.
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const vowels = 'aeiou'
  let count = 0;
  const vowelCount = str.split('').filter(x => {
    if (vowels.includes(x)){
      count ++;
    }
  })
  return count
}



// 10.
// Complete the method/function so that it converts dash/underscore 
// delimited words into camel casing. The first word within the 
// output should be capitalized only if the original word was 
// capitalized (known as Upper Camel Case, also often referred to as 
// Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"




// 11.
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

function narcissistic(value) {
  const val = value.toString().split('');
  const result = val.reduce((acc, cur) => acc + (cur ** val.length),0);
  console.log(typeof(result))
  console.log((result))
  return parseInt(result) === value;
}


// 12.
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
  const words = x.split(' ');
  
  let sum = 0;
  let sumOfArray = []
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      sum += (words[i].charCodeAt(j) - 96)
      // console.log(words[i].charCodeAt(j))
    } 
    sumOfArray.push(sum); 
    sum = 0;
  }
  // console.log(sum)
  // console.log(sumOfArray)
  // console.log(sumOfArray.indexOf(Math.max(...sumOfArray)))
  const maxIndex = sumOfArray.indexOf(Math.max(...sumOfArray));
  console.log(words[maxIndex])
  return words[maxIndex];   
}
// high('what time are we climbing up the volcano');



// 13.
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
// pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
  const num = names.length - 2
  if (names.length === 0) {
    return "no one likes this"
  } else if (names.length === 1) {
    return `${names[0]} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]} ${names[1]} and ${num} others like this`
  }
}



// 14. 
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  return   a.filter(item => !b.includes(item)) 
}


// 15.
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
function findShort(s){
  const words = s.split(' ');
  const wordLengths = words.map(x => x.length)
  return Math.min(...wordLengths)
}
findShort('Testing for fixed tests');


// 16. 
// There is an array with some numbers. All numbers are equal except 
// for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  const counts = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    // console.log(acc[num])
    return acc;
  }, {});

  return parseFloat(Object.keys(counts).find(key => counts[key] === 1));
}
findUniq([ 1, 0, 0 ])



// 17.
// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all words that have five or 
// more letters reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string){
  const words = string.split(' ')
  
  const result = words.map(item => {
    if (item.length >= 5){
      item = item.split('').reverse().join('')
      return item
    } else {
      return item
    }
  })
  return result.join(' ')
}



// 18.
// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  return str.endsWith(ending)
}



// 19.
// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

// (
// �
// �
// +
// �
// �
// +
// 1
// +
// �
// �
// +
// 2
// +
// �
// �
// +
// 3
// +
// .
// .
// .
// )
// =
// �
// ∗
// �
// (a 
// p
//  +b 
// p+1
//  +c 
// p+2
//  +d 
// p+3
//  +...)=n∗k
// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Examples:
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p){
  const sum = n.toString().split('').reduce((acc, val) => acc + Math.pow(val, +p++), 0 )
  // const k = sum / n;
  // return Number.isInteger(k) ? k : -1;
  let k = 1;
  while(n * k !== sum && n * k < sum) { 
    k++;
  }
  return n * k === sum ? k : -1
}
digPow(89, 1)



// 20.
// Build a pyramid-shaped tower, as an array/list of strings,
// given a positive integer number of floors. A tower block is 
// represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

function towerBuilder(nFloors) {
  const tower = [];
  
  for (let i = 1; i <= nFloors; i++) {
    const spaces = ' '.repeat(nFloors - i);
    const stars = '*'.repeat(2 * i - 1);
    const lines = spaces + stars + spaces;
    
    tower.push(lines)
  }
  return tower
}
towerBuilder(3)


// 21.
// Write a function that will return the count of distinct case-insensitive 
// alphabetic characters and numeric digits that occur more than once 
// in the input string. The input string can be assumed to contain only 
// alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  let charCount = {};
  let count = 0;
  
  for (const char of text.toLowerCase()){
    if (char.match(/[a-z]/)){
      charCount[char] = (charCount[char] || 0) + 1;
      // console.log(charCount)
    if (charCount[char] === 2)
    count ++
    }
  }
  
  return count
}
duplicateCount("abcdea")


// 22.
// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let occurrence = {};
    string.split('').forEach(x => {
     if (x.match(/[a-zA-z]/)){
        occurrence[x] = (occurrence[x] || 0) + 1;
        // console.log(occurrence)
     }
   })
   return occurrence
 }
 count('abac');


// 23.
//  Given two integers a and b, which can be positive or negative, find 
//  the sum of all the integers between and including them and 
//  return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b){
  let sum = 0;
  
  if (a > b){
    [b, a] = [a, b] // swapping the values here
  }
  
  for (let i = a; i <= b; i++){
    sum += i
    // console.log(i);
  }
  // console.log(sum)
 return sum
}
getSum(0,0)



// 24.
// The museum of incredible dull things wants to get rid of some exhibitions. 
// Miriam, the interior architect, comes up with a plan to remove the 
// most boring exhibitions. She gives them a rating, and then 
// removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, 
// she's off to an important fair, so she asks you to write 
// a program that tells her the ratings of the items after 
// one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate 
// the original array/list. If there are multiple elements with the same 
// value, remove the one with a lower index. If you get an empty array/list, 
// return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// function removeSmallest(numbers) {
//   const min = numbers.indexOf(Math.min(...numbers))
//   // console.log(Math.min(...numbers))
//   // console.log('min:', min)
//   const removedArray = numbers.splice(min,1);
//   // console.log('numbers', numbers)
//   return numbers
// }                  this function will mutate the original array, but output is same
removeSmallest([ 2, 3,-5, 4, 5])
function removeSmallest(numbers) {
  const min = numbers.indexOf(Math.min(...numbers))

  const result = numbers.filter((item,index) => index !== min )
  //  console.log('array without smallest Element:', result)
  return result
}


// 25.
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(A) {
  let numCount = {}
  A.forEach(item => {
    numCount[item] = (numCount[item] || 0) + 1
  })
  // console.log(nums)
  for(const num in numCount){
    if(numCount[num] % 2 !== 0) {
      // console.log(parseInt(num))
      return parseInt(num)
    }
  }
}
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])


// 26.
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
	return s.split('').map((char, index) => {
    const repeatedArray = char.repeat(index + 1)
    // console.log(`${repeatedArray.charAt(0).toUpperCase()}${repeatedArray.slice(1).toLowerCase()}`)
    return `${repeatedArray.charAt(0).toUpperCase()}${repeatedArray.slice(1).toLowerCase()}`
  } ). join('-')
}
accum("ZpglnRxqenU")


// 27.
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function solution(string) {
  // console.log(string.replace(/([a-z])([A-Z])/g, '$1 $2'))
  return string.replace(/([a-z])([A-Z])/g, '$1 $2')
}
solution('camelCasingTest')


// 28.
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.
function squareDigits(num){
  const numbers = num.toString().split('')
  
  const sumOfNums = numbers.reduce((sum, val) => sum + String(val * val), 0)
  // console.log('sum:',sumOfNums)
  // console.log(sumOfNums.slice(1));
  return sumOfNums.slice(1) * 1
}
squareDigits(32132)

// 29. 
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n){
  return  Math.ceil(n / 5) * 5
}


// // 30.
// A pangram is a sentence that contains every single letter of the 
// alphabet at least once. For example, the sentence 
// "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. 
// Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(string){
  const lowercaseString = string.toLowerCase()
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'
 
  for (const letter of alphabets) {
    if(!lowercaseString.includes(letter))
      return false
  }
  return true
}
// console.log(isPangram("The quick brown fox jumps over the lazy dog."));



// 31.
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  // Convert the number to a string
  let numStr = num.toString();
  
  // Initialize an empty array to store the expanded form components
  let expandedFormArr = [];

  // Iterate through each digit of the number
  for (let i = 0; i < numStr.length; i++) {
      // If the digit is not zero, add its expanded form to the array
      if (numStr[i] !== '0') {
          let zeros = '0'.repeat(numStr.length - i - 1);
          expandedFormArr.push(numStr[i] + zeros);
          // console.log(expandedFormArr);
      }
  }

  // Join the array elements with ' + ' to form the final expanded form string
  let result = expandedFormArr.join(' + ');
  // console.log(result)
  return result;
}
expandedForm(120)


// 32.
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n)
{
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1/(i * 3 + 1)
  }
  return sum.toFixed(2)
}
// console.log(SeriesSum(2))


// 33.
// Given an array (arr) as an argument complete the function countSmileys that 
// should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with 
// invalid input (input will always be an array). Order of the face 
// (eyes, nose, mouth) elements will always be the same.

function countSmileys(arr) {
  let count = 0;
  arr.forEach(face => {
    if (face.match(/^[:;]([-~])?[)D]$/)){
      count++
    }
  })
  return count
}
// console.log(countSmileys([':D',':~)',';~D',':)']))



// 34.
// Complete the function that accepts a string parameter, and reverses each word 
// in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  const words = str.split(' ');
  
  return words.map(x => x.split('').reverse().join('')).join(' ')
}
// console.log(reverseWords('this is an example'))




// 35.
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  //enter code here
 const sum = array.reduce((acc,val) => acc + val, 0)
 
 return sum % 2 === 0 ? 'even' : 'odd'
}


// 36.
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
// that checks whether the two arrays have the "same" elements, with the 
// same multiplicities (the multiplicity of a member is the number of times 
// it appears). "Same" means, here, that the elements in b are the elements 
// in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 
// 14641 is the square of 121, 20736 the square of 144, 361 the square 
// of 19, 25921 the square of 161, and so on. It gets obvious if we 
// write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, 
//   D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, 
//   PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the 
// problem doesn't make sense so return false.



// 37.
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses
// are shown only for you to see which numbers are counted in each case.

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // If both divisors are the same, count only one
      if (n / i === i) {
        count++;
      } else {
        // If divisors are different, count both
        count += 2;
      }
    }
  }
  return count;
}
// console.log(getDivisorsCnt(25))



// 38.
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2); // 
};
binaryArrayToNumber([0,0,1,0])



// 39.
// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
  return (a + b).toString(2)
  // The 2 parameter in toString specifies the base, which is 2 for binary.
}
console.log(addBinary(1,2))