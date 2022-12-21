// const fs = require('fs')
// const first=fs('./content/subfolder/test.txt','utf8')
// console.log(first)  ERROR

const {readFileSync,writeFileSync}=require('fs')
const test=readFileSync('./content/subfolder/test.txt','utf8')

// console.log(test) 
console.log('Step 1')

writeFileSync('./content/result.txt',`Here is the written result guys : ${test}`,{flag :'a'})
//'a' simply appends the text again

console.log('Step 2')
console.log('Step 3')
