const http =require('http')
const server =http.createServer((req,res)=>{
 if(req.url==='/')
   { res.end('Welcome to our Chutiyap world')}
if(req.url==='/about'){
    res.end('Here is the description ')
}
res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for So kindly fuck off </p>
    <a href="/">Fuck Off</a>
    `)
})

server.listen(5000)