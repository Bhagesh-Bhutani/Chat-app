const express=require('express');
const app=express();
let http=require('http').createServer(app);
const io=require('socket.io')(http);
const path=require('path')

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

let port=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.render('index');
})

io.on('connection',(socket)=>{
    socket.on('message',(msg)=>{
        io.emit('message',msg);
    })
})

http.listen(port,()=>{
    console.log("Server running at http://localhost:"+port);
})