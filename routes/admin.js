const path = require('path');
const express = require('express');
const router = express.Router();

//for setting current directory path
const rootdir = require('../util/path');


router.get('/add-product', (req, res, next) => {
    console.log('In Admin JS add-product');
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'));

});
//for post method url only 
router.post('/admin/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/add-product');
});
module.exports = router;