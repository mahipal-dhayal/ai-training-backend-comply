const admin = require('firebase-admin');
const serviceAccount = require('./ai-traning-9dcd9-firebase-adminsdk-fbsvc-3f885821d3.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
