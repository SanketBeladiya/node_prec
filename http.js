const http= require('http')
const server =http.createServer((req,res)=>{
    
    if (req.url==='/') {
        res.end("this is home page")
        
    }

   else if (req.url==='/about') {
        res.end("this is about page")
        
    }
else{
    res.end(`<h1>OOPS!</h1>
    <p>tari masi ne path sarkho nakh </p>
    <a href='/' >back home</a>`)
}

})

server.listen(4000)