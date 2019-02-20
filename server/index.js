require('dotenv').config();
const express = require('express');
const request = require('request');
const queryString = require('querystring');

const app = express();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// console.log('Client id = ', clientId);
// console.log('Secret = ', clientSecret);

const spotifyUrl = 'https://api.spotify.com/v1';
const authUrl = 'https://accounts.spotify.com/api/token';

let accessToken = "";

function getAuthorizationStr(id, secret) {
    return 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64');
}

app.get('/search', function (req, res) {

    const q = req.query.q;
    const type = req.query.type;

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    if (accessToken === "") {
        const formData = queryString.stringify({
            grant_type: 'client_credentials'
        });
        
        request({
            method: 'POST',
            uri: authUrl,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                Authorization: getAuthorizationStr(clientId, clientSecret)
            },
            body: formData
        }, function (err, response, body) {
            if (err) {
                console.log('Error from Spotify:', err);
                res.send(err);
                return;
            }
            // console.log('[resp]' + response);
            // console.log('[body]' + body);
    
            accessToken = JSON.parse(body).access_token;
            
            console.log('[access token]', accessToken);
    
            request({
                method: 'GET',
                uri: `${spotifyUrl}/search?q=${q}&type=${type}`,
                headers: {
                    Authorization: 'Bearer ' + accessToken
                },
            }, function (err, response, body) {
                if (err) {
                    res.status(500).send('Error: ' + err);
                    return;
                }
                //console.log('[body from spotify] ', body);
                return res.status(200).send(body);
            });
        });
    } else {
        request({
            method: 'GET',
            uri: `${spotifyUrl}/search?q=${q}&type=${type}`,
            headers: {
                Authorization: 'Bearer ' + accessToken
            },
        }, function (err, response, body) {
            if (err) {
                res.status(500).send('Error: ' + err);
                return;
            }
            //console.log('[body from spotify] ', body);
            console.log(accessToken);
            console.log("access token is valid");
            return res.status(200).send(body);
        });
    }
    
});

app.get('/artists/:id', function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    const id = req.params.id;

    request({
        method: 'GET',
        uri: `${spotifyUrl}/artists/${id}`,
        headers: {
            Authorization: 'Bearer ' + accessToken
        },
    }, function (err, response, body) {
        if (err) {
            res.status(500).send('Error: ' + err);
            return;
        }
        // console.log('[body from spotify] ', body);
        return res.status(200).send(body);
    });
});

app.get('/artists/:id/related-artists', function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    const id = req.params.id;
    
    request({
        method: 'GET',
        uri: `${spotifyUrl}/artists/${id}/related-artists`,
        headers: {
            Authorization: 'Bearer ' + accessToken
        },
    }, function (err, response, body) {
        if (err) {
            res.status(500).send('Error: ' + err);
            return;
        }
        // console.log('[body from spotify] ', body);
        return res.status(200).send(body);
    });
});

app.listen(2000, 'localhost');



 // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");

    // console.log(accessToken);

    // const id = req.url.id;

    // request({
    //     method: 'GET',
    //     uri: `${spotifyUrl}/artist/${id}`,
    //     headers: {
    //         Authorization: 'Bearer ' + accessToken
    //     },
    // }, function (err, response, body) {
    //     if (err) {
    //         res.status(500).send('Error: ' + err);
    //         return;
    //     }
    //     // console.log('[body from spotify] ', body);
    //     return res.status(200).send(body);
    // });

// request({
//     method: 'POST',
//     uri: authUrl,
//     headers: {
//         'content-type': 'application/x-www-form-urlencoded',
//         Authorization: getAuthorizationStr(clientId, clientSecret)
//     },
//     body: formData
// }, function (err, response, body) {
//     if (err) {
//         console.log('Error from Spotify:', err);
//         res.send(err);
//         return;
//     }
//     // console.log('[resp]' + response);
//     // console.log('[body]' + body);

//     const accessToken = JSON.parse(body).access_token;
    
//     console.log('[access token]', accessToken);
//     console.log(id);