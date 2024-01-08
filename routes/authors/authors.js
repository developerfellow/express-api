const express = require('express');
const router = express.Router();

const authors = [
    {id:1,name:'author1'},
    {id:2,name:'author2'},
    {id:3,name:'author3'}
];

router.get('/',function(req,res){
  res.send(authors);
});

module.exports = router;