const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/sw409-lam-bui'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/sw409-lam-bui/index.html'));
});
app.listen(process.env.PORT || 8080);
