const stringToCheck = 'Umuzi';
const consonant = ['m', 'z'];
let newString = ' ';

for(const vowels of stringToCheck) {
  if(consonant.indexOf(vowels) === -1) {
    newString += vowels;
  }
}
console.log(newString);