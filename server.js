const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));

  
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/login.html'));
  });

  app.post('/login',function(req, res){
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;

    console.log(req.body);
    res.send("Username:" + username , "Password:" + password);
  });

  const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));

  