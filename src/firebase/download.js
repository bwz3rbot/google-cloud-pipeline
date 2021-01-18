/* Download a file to a location */
module.exports =
    async (srcFilename, destFilename) => {
        return require('./config/bucket').file(srcFilename).download({
            destination: destFilename
        });
    }