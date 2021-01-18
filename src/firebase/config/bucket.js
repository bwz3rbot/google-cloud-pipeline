const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(require('./key.json')),
  storageBucket: process.env.BUCKET
});
module.exports = admin.storage().bucket(process.env.BUCKET);