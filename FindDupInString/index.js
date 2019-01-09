function findDup(string){
  const hash = {}
  for(let char of string){
    if(!hash[char]){
      hash[char] = 1;
    } else {
      hash[char] += 1
      /* Comment out if statement, to see the number of times each char is found in the string */
      if(hash[char] > 1){ return `${char} repeats ${hash[char]} times`} 
    }
  }
  return hash
}
findDup('abbcc')