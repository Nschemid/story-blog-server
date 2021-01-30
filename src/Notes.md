## Add the DB name

## Install firebase admin
> npm install firebase-admin

## Go to firebase console
> Go to Project settings
> Go to service accounts
> Go to firebase Admin SDK
> Generate next private key
> Place inside the src/ project
> Rename it to credentials.json
> import firebase on server.js file
> import credentials on server.js file
> And InitializeApp with the credentials

```
import * as admin from 'firebase-admin'
import credentials from './credentials.json'

admin.initializeApp({ credential: admin.credential.cert(credentials) });
```
## add the credentials on gitignore file
```
src/credentials.json
```


# Make the server hold the photos

## Server static files on express - server.js
```
app.use(express.static(__dirname + '/uploads'));
```

## Folder uploads

## Protect all the end points with a single function
> express middleware 
### Create the protectRoute
```
import * as admin from 'firebase-admin';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        req.user = user;
        next();
    } catch (e) {
        res.status(401).json({ message: "You must be logged in to access these resources" });
    }
};
```

### Add the middleware on server.js

