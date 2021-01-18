# Google Cloud Pipeline

Create your Firebase project in the console.

https://console.firebase.google.com/

Navigate to `Storage`.

Set up your project and get your Service Account Key.

Place the file in the root folder and name it `key.json`.

This is all that is required:
```javascript
(async () => {
    await require('./firebase/upload')('input.txt');
    await require('./firebase/download')('input.txt', 'output.txt');
})();
```