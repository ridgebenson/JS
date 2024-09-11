function removeDuplicates(str) {
  return str
    .split('')
    .filter((item, index) => str.indexOf(item) === index)
    .join('');

}

module.exports = removeDuplicates;
