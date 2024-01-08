const express = require('express');
const app = express();
const courseRouter = require('./routes/courses/courses');
const authorRouter = require('./routes/authors/authors');


app.use('/api/courses',courseRouter);
app.use('/api/authors',authorRouter);

app.get('/',function(req,res){
  res.sendFile('index.html',{root:__dirname});
});

app.get('/about',function(req,res){
  res.sendFile('about.html',{root:__dirname});
});


app.listen(3000,() => console.log('Server running on port 3000'))