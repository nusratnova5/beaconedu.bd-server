const express=require('express')
const app = express();
const port= process.env.PORT || 5000;

const coursesInfo = require('./data/courses.json');

app.get('/',(req,res)=>{
    res.send('Courses API Running');
});

app.get('/courses',(req,res)=>{
    res.send(coursesInfo);
});

app.listen(port,()=>{
    console.log('Courses server running on port',port);
});