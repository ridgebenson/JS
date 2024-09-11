function isPalindrome(str){
    const cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = cleanString.split('').reverse().join('');
    return reversedString === cleanString;

}

module.exports = isPalindrome;