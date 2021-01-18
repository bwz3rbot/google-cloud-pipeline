/* Upload a file to Bucket */
module.exports =
    async (filename) => {
        return require('./config/bucket').upload(filename, {
            gzip: true,
            metadata: {
                cacheControl: 'public, max-age=31536000',
            },
        });
    }