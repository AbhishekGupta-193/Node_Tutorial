const {readFile,writeFile}=require('fs')

console.log('Step 1')

readFile('./content/subfolder/test.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    // console.log(result)
    const first=result

writeFile('./content/result-async.txt',
`Here is the async result : ${first}`,
(err,result)=>{
    if(err){
        console.log(err)
    return;}

    console.log('Step 2')

})

})

console.log('Step 3')
