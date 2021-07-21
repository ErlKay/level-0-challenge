function common(str1, str2) {
    let sameAlph = '';
    for (let i = 0; i < str1.length; i += 1) {
      if(sameAlph.indexOf(str1[i]) === -1) {
        if (str2.indexOf(str1[i]) !== -1) {
          sameAlph += str1[i];
        }
      }
    }
    console.log(sameAlph);
  }
  common('house', 'computers');
