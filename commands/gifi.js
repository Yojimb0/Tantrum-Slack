var Firebase = require('firebase');
var helpers  = require('../helpers');

var db = new Firebase("https://tantrum-slack.firebaseio.com/gifi");

module.exports = function(req, res){
 	
	// Check if register mode
	// => Yes: Register
	//		Connect Firebase
	//		Injecter l'URL + Keywords
	// => Nope: Display
	//		Rechercher les keywords
	var args = req.query.text.split(' ');
	var argsL = args.length;
	// console.log('[args]');
	// console.log(args);

	if(args[0] === 'register'){
		
		console.log('[setGif()]');
		setGif(args);
		helpers.postToSlack(req.query.channel_id, 'Gif enregistré');

	}else{
		//Get everything
		//creer un array avec les résults contenant le premier mot clé
		// => recursif
		db.on("value", function(snapshot) {
				var results = snapshot.val();
				var resultsL = Object.keys(results).length;
				for(var i=0;i<resultsL;i++){

				}
			}, function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			});
		}


    

    return 'Gifi executed';

}

function getGif(keywords){

}
function setGif(args){
	var record = { 'gif': args[1] }
	record.keywords = args.splice(2).join(' ');

	// console.log('[record{}]');
	// console.log(record);

	db.push(record);

	return true
}