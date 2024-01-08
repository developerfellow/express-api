const express = require('express');
const router = express.Router();
const courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
];

router.get('/',function(req,res){
    res.send(courses);
});

router.get('/:id',function(req,res){
    const course = courses.find(
        (c) => {
            return c.id === parseInt(req.params.id);
        }
    );

    if(!course){
        res.status(404).send('The course ID is not found');
        return false;
    }
    res.send(course);
});

module.exports = router;