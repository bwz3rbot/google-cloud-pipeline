(async () => {
    await require('./firebase/upload')('input.txt');
    await require('./firebase/download')('input.txt', 'output.txt');
})();