const admin = require("firebase-admin");
const key = require('../../../key.json');
admin.initializeApp({
  credential: admin.credential.cert(key),
  storageBucket: `${key.project_id}.appspot.com`
});
module.exports = admin.storage().bucket();