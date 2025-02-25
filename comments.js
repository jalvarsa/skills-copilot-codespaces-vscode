// Create web server
var express = require('express');
var fs = require('fs');
var app = express();

// Set up the server
app.get('/comments', function(req, res) {
    var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
    res.json(comments);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

// Create comments.json