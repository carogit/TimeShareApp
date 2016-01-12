var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var config = require('./config');
var mongoose   = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(config.db.mongodb); // connect to our database
//var Advertdb = require('./models/adverts');


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.use(require('./controllers'));

//app.get('/advertslist', function(req, res) {
//    console.log("data received by GET request");
//	Advertdb.find(function(err, adverts) {
//		if (err)
//			res.send(err);
//
//		res.json(adverts);
//                console.log('GET:',adverts);
//	});
//});
//
//
//app.post('/advertslist', function(req, res) {
//
//        console.log(req.body);
//
//	var advert = new Advertdb(); // create a new instance of the Advert model
//	advert.author = req.body.author; // set the Adverts author (comes from the request)
//        advert.type = req.body.type; 
//        advert.content = req.body.content; 
//        advert.loc = req.body.loc; 
//        advert.published = req.body.published; 
//        advert.answered = req.body.answered; 
//        advert.created_at = req.body.created_at; 
//        advert.updated_at = req.body.updated_at; 
//
//	advert.save(function(err) {
//		if (err)
//			res.send(err);
//
//		res.json(advert);
//                console.log('Saved:',advert);
//	});
//});
//
//
//app.delete('/advertslist/:advert_id', function(req, res) {
//        console.log(req.params.advert_id);
//	Advertdb.remove({
//		_id: req.params.advert_id
//	}, function(err, advert) {
//		if (err)
//			res.send(err);
//
//		res.json({
//			message: 'Successfully deleted'
//		});
//	});
//
//});
//
//app.get('/advertslist/:advert_id', function(req, res) {
//
//		Advertdb.findById(req.params.advert_id, function(err, advert) {
//			if (err)
//				res.send(err);
//			res.json(advert);
//                        console.log('Edit:',advert);
//		});
//
//});
//
//app.put('/advertslist/:advert_id', function(req, res) {
//
//	Advertdb.findById(req.params.advert_id, function(err, advert) {
//
//		if (err)
//			res.send(err);
//
//		advert.author = req.body.author; // set the Adverts author (comes from the request)
//                advert.type = req.body.type; 
//                advert.content = req.body.content; 
//                advert.loc = req.body.loc; 
//                advert.published = req.body.published; 
//                advert.answered = req.body.answered; 
//                advert.created_at = req.body.created_at; 
//                advert.updated_at = req.body.updated_at; 
//		advert.save(function(err) {
//			if (err)
//				res.send(err);
//
//			res.json(advert);
//                        console.log('Updated:',advert);
//		});
//
//	});	
//});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});

