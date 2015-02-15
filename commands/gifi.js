var Firebase = require('firebase');
var helpers  = require('../helpers');

module.exports = function(req, res){
 
    helpers.postToSlack(req.query.channel_id, '[msg: '+req.query.text+']'+"\n"+' <http://i.imgur.com/Du65969.gifv>');

    return 'Gifi executed';

}

