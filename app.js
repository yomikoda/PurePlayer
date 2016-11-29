var express = require('express'), app = express(), http = require('http').Server(app);

app.use('/js', express.static('assets/js'));
app.use('/css', express.static('assets/css'));
app.use('/img', express.static('assets/img'));
app.use('/fonts', express.static('assets/fonts'));

app.get('/test', function(req, res){
  res.send('<h1>Hello TEST</h1>');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/tpl/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
