
const isPalindrome = require('./palindrome');

console.log('Is the string a palindrome?');
console.log('A man, a plan, a canal, Panama' + ': ' + isPalindrome('A man, a plan, a canal, Panama'));
console.log('Was it a car or a cat I saw?' + ': ' + isPalindrome('Was it a car or a cat I saw?'));
console.log('Hello, World!' + ': ' + isPalindrome('Hello, World!'));
console.log('racecar' + ': ' + isPalindrome('racecar'));

const reverse = require('./reverse');

console.log('Reverse a string');
console.log(reverse('Hello, World!'));
console.log(reverse('racecar'));
console.log(reverse('This is a reversed string'));

const longestPalindrome = require('./longestpalindrome');

console.log('Find the longest palindromic substring');
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));

const isAnagram = require('./anagram');

console.log('Check if two strings are anagrams');
console.log(isAnagram('Listen', 'Silent'));
console.log(isAnagram('Hello', 'World'));

const removeDuplicates = require('./removeduplicates');

console.log('Remove duplicates from a string');
console.log(removeDuplicates('programming'));
console.log(removeDuplicates('hello world'));
console.log(removeDuplicates('aaaaa'));
console.log(removeDuplicates('abcd'));
console.log(removeDuplicates('aabbcc'));

const countPalindromes = require('./countPalindromes');

console.log('Count palindromes in a string');
console.log(countPalindromes('ababa'));
console.log(countPalindromes('racecar'));
console.log(countPalindromes('aabb'));
console.log(countPalindromes('a'));
console.log(countPalindromes('abc'));

const longestCommonPrefix = require('./longestcommonprefix');

console.log('Find the longest common prefix');

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''
console.log(longestCommonPrefix(['interspecies', 'interstellar', 'interstate'])); // 'inters'
console.log(longestCommonPrefix(['prefix','prefixes','preform'])); // 'pre'
console.log(longestCommonPrefix(['apple','banana','cherry'])); // ''

const isCaseInsensitivePalindrome = require('./caseInsensitivePalindrome');

console.log('Check if a string is a case-insensitive palindrome');

console.log(isCaseInsensitivePalindrome('Aba')); // true
console.log(isCaseInsensitivePalindrome('Racecar')); // true
console.log(isCaseInsensitivePalindrome('Palindrome')); // false
console.log(isCaseInsensitivePalindrome('Madam')); // true
console.log(isCaseInsensitivePalindrome('Hello')); // false