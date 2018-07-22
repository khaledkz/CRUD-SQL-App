const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>(
    res.render('homepage.hbs')
))
router.get('/main-slider',(req,res)=>(
    res.render('menu.hbs',{title:'Main Slider',linkTitle:'main-slider'})
))

module.exports = router;
