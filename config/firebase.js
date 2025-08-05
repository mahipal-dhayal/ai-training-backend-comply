const admin = require('firebase-admin');

const base64ServiceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;

if (!base64ServiceAccount) {
  throw new Error('Missing FIREBASE_SERVICE_ACCOUNT_BASE64 environment variable');
}

const serviceAccount = JSON.parse(Buffer.from(base64ServiceAccount, 'base64').toString('utf-8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin;
