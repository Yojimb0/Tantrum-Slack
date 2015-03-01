var request  = require('request');

module.exports = {
	fetchArguments: function(){
		return this.split(' ');
	},
	postToSlack: function(channel, text){
		var headers = {
		    'User-Agent': 'Super Agent/0.0.1',
		    'Content-Type': 'application/x-www-form-urlencoded'
		}
		var options = {
		    url: 'https://slack.com/api/chat.postMessage',
		    method: 'POST',
		    headers: headers,
		    form: {
		    	'token': process.env.SLACKTOKEN,
		    	// 'channel': channel,
		    	'channel': '#test', // Pour pouvoir poster depuis un server de dev local
		    	'text': text,
		    	'username': 'Tony A. Bot'
		    }
		}
		request(options, function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        // Print out the response body
		        console.log(body)
		    }
		})
	}
}
