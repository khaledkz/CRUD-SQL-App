const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>(
    res.render('mainpage.hbs')
))

module.exports = router;
