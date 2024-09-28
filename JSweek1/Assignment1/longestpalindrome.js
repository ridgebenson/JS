function longestPalindromicSubstring(s){
    let longest = '';
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < 2; j++){
            let left = i;
            let right = i + j;
            while(s[left] && s[left] === s[right]){
                left--;
                right++;
            }
            if((right - left - 1) > longest.length){
                longest = s.substring(left + 1, right);
            }
        }
    }
    return longest;
}

module.exports = longestPalindromicSubstring;