const express = require('express');
const router = express.Router();
const filename =require('./database.sqlite3');
const sqlite3    = require( 'sqlite3' ).verbose();

// open the database

router.get('/',(req,res)=>{
  
    res.render('homepage.hbs')
})
router.get('/main-slider',(req,res)=>(
    res.render('menu.hbs',{title:'Main Slider',linkTitle:'main-slider'})
))
router.get('/main-slider/add',(req,res)=>(
    res.render('addMainSlider.hbs')
))
router.post('/main-slider/add',(req,res)=>(
    res.json(req.body)
))
module.exports = router;
