function areAnagrams(str1, str2){
    const cleanedStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanedStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
    const sortedStr1 = cleanedStr1.split('').sort().join('');
    const sortedStr2 = cleanedStr2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

module.exports = areAnagrams;