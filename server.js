require('dotenv').config();


const Twilio = require('twilio');
const express = require('express');

const app = express();

const AccessToken = Twilio.jwt.AccessToken;
const VoiceGrant = AccessToken.VoiceGrant;


app.get('/token/:identity', (req, res) => {
  const identity = req.params.identity;
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET,
    {identity: 'USd4c94e80dce9aafc3cd865b84c019d9c'}
  );

  token.identity = identity;
  token.addGrant(
    new VoiceGrant({
        incomingAllow: true
    }),
  );

  res.send({
    identity: token.identity,
    jwt: token.toJwt(),
  });
  console.log(`Authentication successful for identity: ${token.toJwt()}`);

});



app.listen(3001, function () {
  console.log('Programmable Chat server running on port 3001!');
});

export {token}
