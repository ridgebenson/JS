function countPalindromes(s) {
    function isPalindrome(s) {
        for (let i = 0; i < s.length / 2; i++) {
            if (s[i] !== s[s.length - i - 1]) {
                return false;
            }
        }
        return true;
    }
    
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s.substring(i, j + 1))) {
                count++;
            }
        }
    }
    return count;

}

module.exports = countPalindromes;