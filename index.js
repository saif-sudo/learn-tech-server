const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/course-cat.json')

app.get('/',(req , res) => {
    res.send('Courses API Running');
});
app.get('/courses-cat',(req , res) => {
    res.send(categories);
});

app.listen(port, () => {
    console.log('Courses Cat Server running on port',port);
})