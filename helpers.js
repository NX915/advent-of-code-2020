fs = require('fs');

const getFile = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}

const getLines = stringData => {
    return stringData.trim().split(/\r?\n/);
}

const getNumbers = file => {
    return new Promise((resolve, reject) => {
        getFile(file)
            .then(data => resolve(getLines(data).map(num => parseInt(num))));
    });
}

const sortNumbers = arr => {
    output = [...arr]
    return output.sort((a, b) => a - b);
}

module.exports = {
    getFile,
    getLines,
    getNumbers,
    sortNumbers
};