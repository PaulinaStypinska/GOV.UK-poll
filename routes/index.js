var express = require('express');
var router = express.Router();

var data = require('../lib/crud');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/poll');
});

router.get('/answers', function(req, res,next){
    data.retrieve(function(err, results){
        if (err) throw err;
        else {
            res.render('answers', {answerlist: results});
        }
    });
});

router.get('/poll', function(req, res, next){
    res.render('poll');
});

/* POST to Add User Service */
router.post('/submitanswers', function(req, res) {

    // Get our form values. These rely on the "name" attributes
    var rey = req.body.rey;
    var fav = req.body.favorite;
    var chara = req.body.characters;
    var parents = req.body.parents;
    
    data.insert(fav, chara, rey, parents, function (err){
        if (err) {
            res.send("There was a problem adding the information to the database.");
            throw err;
        }
        else {
            res.redirect('answers');
        }
    });
});

module.exports = router;
