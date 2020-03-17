const getAnagram = (string) => {
  if (string.length < 2) {
    return [string];
  } 

  let anagrams = [];
  let before, focus, after, shortWord, subAnagrams;

  for (let x = 0; x < string.length; x++) {
    before = string.slice(0, x);
    focus = string[x];
    after = string.slice(x + 1, string.length + 1);
    shortWord = before + after;
    subAnagrams = getAnagram(shortWord);

    anagrams.push(string[x]);
    for (let y = 0; y < subAnagrams.length; y++) {
      anagrams.push(focus + subAnagrams[y]);
    }
  }
  return anagrams;
}

console.log(getAnagram('ABC'));
module.exports = getAnagram;
