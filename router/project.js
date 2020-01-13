const express = require('express');
const router = express.Router();
const  dataProjects  = require('../data.json');

const data = dataProjects.data;
const projects = data.project;

router.get('/:id', function(req, res) {  
    res.render('project', {
        data: projects[req.params.id-1]
    } );
  });

module.exports=router;
