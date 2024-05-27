const express = require('express');
const app = express();
const port = process.env.port || 8080;

// secure the direct call to the application
const passport = require('passport');
const { JWTStrategy } = require('@sap/xssec');
const xsenv = require('@sap/xsenv');

// XSUAA Middleware
passport.use(new JWTStrategy(xsenv.getServices({uaa:{tag:'xsuaa'}}).uaa));

app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));

app.get('/api/info', getInfo);

app.listen(port, () => {
	console.log('%s listening at %s', app.name, port);
})

function getInfo(req, res, next) {
    
    res.setHeader('Content-Type', 'application/json');
    const result = {
        user: req.user,
        authInfo: req.authInfo,
        clientId: req.authInfo.getClientId()
    };
    res.send(result);
}