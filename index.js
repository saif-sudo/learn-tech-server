const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/course-cat.json')
const course = require('./data/course.json')

app.get('/',(req , res) => {
    res.send('Courses API Running');
});
app.get('/courses',(req , res) => {
    res.send(categories);
});
app.get('/courses/cat/',(req , res) => {
    res.send(course);
});
app.get('/courses/cat/:id',(req , res) => {
    
    const id = req.params.id;

    if(id === '06' ){
        res.send(course);
    }else{
        const catCourse = course.filter(c => c.category_id === id);
        res.send(catCourse);
    }
   
    
});

app.get('/courses/:id',(req , res) => {
    const id = req.params.id;
    const selectedCourse = course.find(c => c._id === id);
    res.send(selectedCourse);
    
});

app.listen(port, () => {
    console.log('Courses Cat Server running on port',port);
})