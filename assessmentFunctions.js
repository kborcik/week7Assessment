function hasSumToZero(arr) {
    const seen = new Set(); 
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (seen.has(-num)) {
        return true; 
      }
      seen.add(num);
    }
    return false; 
  }
  

  // time complexity is 0(n)


  function hasUniqueChars(word) {
    const seen = new Set(); 
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (seen.has(char)) {
        return false; 
      }
      seen.add(char);
    }
    return true; 
  }

  // essentially the same function. so also 0(n)

  function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = new Set();
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toLowerCase();
      if (alphabet.includes(char)) {
        letters.add(char);
        if (letters.size === alphabet.length) {
          return true; 
        }
      }
    }
    return false;
  }

  // this also has linear rate at which is scales so it is also 0(n)

  function findLongestWord(words) {
    let longestWordLength = 0;
  
    for (let i = 0; i < words.length; i++) {

      if (words[i].length > longestWordLength) {
        longestWordLength = words[i].length;
      }
    }
  
    return longestWordLength;
  }
  

  //this function is also 0(n)