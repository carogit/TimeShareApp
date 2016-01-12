/*  ../models/adverts.js*/

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AdvertSchema   = new Schema({
	author: String,
        type: String,
        content: String,
        loc: String,
        published: Boolean,
        answered: Boolean,
        created_at: {type: Date, default: Date.now},
        updated_at: {type: Date, default: Date.now}
    
        },
        { 
            collection : 'advertslist'
        });

module.exports = mongoose.model('adverts', AdvertSchema);


