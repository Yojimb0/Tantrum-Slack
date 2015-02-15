var express  = require('express');
var routes   = ['gifi', 'quotes'];

if(process.env.SLACKTOKEN){
	console.log('Slack token: ' + process.env.SLACKTOKEN);
}else{
	console.log('process.env.SLACKTOKEN missing');
	return;
}

/* Express configuration
---------------------------------------*/
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));


/* Routes
---------------------------------------*/
app.get('/', function(req,res){ res.send('Hello World!'); });

routes.forEach(function(r){

	app.get('/'+r, function(req, res) {
		var ret = require('./commands/'+r)(req,res);
		if(ret) res.send(ret);
	});
	
});


/* Starting server
---------------------------------------*/
app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));
});


/* Help & Docs
---------------------------------------*/
// Slack request
// ?token=eZH7rG3VoRbUxOnrkieCAkQL
// &team_id=T0001
// &channel_id=C2147483705
// &channel_name=test
// &user_id=U2147483697
// &user_name=Steve
// &command=/gifi&text=zob