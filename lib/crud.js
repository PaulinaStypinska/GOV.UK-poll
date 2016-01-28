var mongoose = require('mongoose');    
var schema = mongoose.Schema;
    
    var pollSchema = new schema({
        favorite: String,
        characters: {type: Array},
        rey: String,
        parents: String
    });
    
    var Answer = mongoose.model('poll', pollSchema, 'pollcollection');


exports.retrieve = function (callback){
   Answer.find({}, function (err, answers){
       if (err) callback(err);
       else  callback(null, answers);
   });
};

exports.insert = function (fav, chara, rey, parents, callback) {
 var newAnswers = new Answer({
        favorite: fav,
        characters: chara,
        rey: rey,
        parents: parents
 });
    newAnswers.save(function (err, pollAns){
        if (err) callback(err);
        else {
            callback(null);
        }
    });  
};

