const path = require('path');

const express = require('express');

const cors = require('cors');

const data = require('./data/profiles.json')

const app = express();

app.use(cors());

const port = 8001;

app.get('/api/profiles', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'profiles.json'));
});

 app.get('/api/profiles/:id', function (req, res) {
    const profileId = Number(req.params.id)
    const getProfile = data.profiles.find( profile => profile.id === profileId)

    if(!getProfile){
      res.status(500).send('Holy 💩!')
    }else{
      res.json(getProfile)
    }
 })
 
 app.get('/api/miperfil', function (req, res) {
  const userAdmin = 'admin'
  const getUserAdmin = data.profiles.find( profile => profile.role === userAdmin)

  if(!getUserAdmin){
    res.status(500).send('Holy 💩!')
  }else{
    res.json(getUserAdmin)
  }
})

app.listen(port, () => {
  console.log(`[profiles] API listening on port localhost:${port}/api/profiles.`);
});
