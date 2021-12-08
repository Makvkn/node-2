var fs = require("fs");

async function readFiles () {
    const [files] = await bucket.getFiles({ prefix: 'https://files.akzia.com/test/'});
    console.log('Files:');
    files.forEach(file => {
        var stats = fs.statSync("files.txt")
        var fileSizeInBytes = stats.size;
        if (fileSizeInBytes == 0) {
            console.log(file.name);
        }
    });
};
readFiles()



