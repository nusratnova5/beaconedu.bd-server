const express=require('express')
const app = express();
const cors = require('cors');
const port= process.env.PORT || 5000;

app.use(cors());

const coursesInfo = require('./data/courses.json');

app.get('/',(req,res)=>{
    res.send('Courses API Running');
});

app.get('/courses',(req,res)=>{
    res.send(coursesInfo);
});

app.get('/courses/:name',(req,res)=>{
    const name =req.params.name;
    const getCourseInfo=coursesInfo?.filter(course=>course.name === name);
    res.send(getCourseInfo);
});



app.listen(port,()=>{
    console.log('Courses server running on port',port);
});