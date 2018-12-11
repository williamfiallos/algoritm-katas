function anagramCounter (wordsArray) {
  let counter = 0;
  let currentIndex = 0;

  wordsArray.forEach((word,index) => {
    for(let i = index; i < wordsArray.length; i++){
      let nextWord = wordsArray[i + 1]
      if(nextWord){     
      if(checkIfTheSame(word,nextWord)){
        counter++
      }}
    }
  })
  return counter;
}

function checkIfTheSame(word1,word2){
  let sorted1 = word1.split('').sort().join('')
  let sorted2 = word2.split('').sort().join('')
  return sorted1 === sorted2
}

let list1 = ["dell", "ledl", "abc", "cba", "bca", "bac"]
anagramCounter(list1)