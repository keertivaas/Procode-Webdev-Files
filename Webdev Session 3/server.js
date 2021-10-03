const express = require('express');

const app = express();


app.listen(3000);

app.get('/', (req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
});
app.get('/end',(req,res)=>{
    res.sendFile('./views/end.html',{root:__dirname})
});
