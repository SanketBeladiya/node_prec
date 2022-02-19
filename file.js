const {readFileSync,writeFileSync} =require('fs')
const first=readFileSync('./content/first.txt','utf-8')
// writeFileSync('./content/first.txt','dasdsahdasdjhaskjdhasdhgasj')
// writeFileSync('./content/first1.txt','hello') 

const {readFile}=require('fs')
readFile('./content/firdst.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(result);

})