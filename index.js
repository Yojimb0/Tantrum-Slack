var express = require('express');
var request = require('request');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});


console.log('Slack token: ' + process.env.SLACKTOKEN);

// ?token=eZH7rG3VoRbUxOnrkieCAkQL&team_id=T0001&channel_id=C2147483705&channel_name=test&user_id=U2147483697&user_name=Steve&command=/gifi&text=zob
app.get('/gifi', function(req, res) {
	// response.send('Vous avez demandé un gif en relation avec : '+request.query.text);
	
	/* REQUEST -----------------------------*/
	// Set the headers
	var headers = {
	    'User-Agent':       'Super Agent/0.0.1',
	    'Content-Type':     'application/x-www-form-urlencoded'
	}

	// Configure the request
	var options = {
	    url: 'https://slack.com/api/chat.postMessage',
	    method: 'POST',
	    headers: headers,
	    form: {
	    	'token': process.env.SLACKTOKEN,
	    	'channel': req.query.channel_id,
	    	// 'channel': '#test',
	    	'text': 'Vous avez demandé un gif en relation avec : '+req.query.text,
	    	'username': 'ZeBot'
	    }
	}

	// Start the request
	request(options, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        // Print out the response body
	        console.log(body)
	    }
	})
	/* ---------------------------------------*/
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
