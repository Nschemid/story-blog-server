import express from 'express';
import bodyParser from 'body-parser';
import { db } from './db';
import { routes, protectRoute } from './routes';
import * as admin from 'firebase-admin'
import credentials from './credentials.json'

//let the backend create/delete users from the firebase

admin.initializeApp({ credential: admin.credential.cert(credentials) });

const app = express();

app.use(express.static(__dirname + '/uploads'));

app.use(bodyParser.json());

//Example:
//app.get('/', function (req, res) {
//    res.send('hello world')
//  })

routes.forEach(route => {
    route.private? 
    app[route.route.method](route.route.path, protectRoute, route.route.handler)
    : app[route.route.method](route.route.path, route.route.handler);

});

const start = async () => {
    await db.connect('mongodb://localhost:27017');
    app.listen(8080,() => {
        console.log('Server is listening on port 8080');
    });
}

start();