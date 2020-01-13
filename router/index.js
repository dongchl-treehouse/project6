const express = require('express');
const router = express.Router();
const  dataProjects  = require('../data.json');

const data = dataProjects.data;

const projects = data.project;

router.get('/', function(req,res){
    res.render('index', {myProjects: projects});
})
router.get('/index' , function(req,res) {
    res.render('index', {myProjects: projects})
});


module.exports=router;