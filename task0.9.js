function findVowels() {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelsFound = [];
    var word = 'Umuzi';
    for(k = 0; k < word.length; k++) {
      if(vowels.indexOf(word[k]) !== -1) {
        vowelsFound.push(word[k]);
      }
    }
    return vowelsFound;
  }
  
