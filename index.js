var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});


// ?token=eZH7rG3VoRbUxOnrkieCAkQL&team_id=T0001&channel_id=C2147483705&channel_name=test&user_id=U2147483697&user_name=Steve&command=/gifi&text=zob
app.get('/gifi', function(request, response) {
  response.send('Vous avez demandé un gif en relation avec : '+request.query.text);
  console.log(request);
  // JSON.stringify(request)
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
