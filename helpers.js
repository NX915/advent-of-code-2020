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

const getFileLines = file => {
    return getFile(file).then(data => getLines(data));
}

const splitByEmptyLine = data => data.split( "\r\n\r\n");

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

const multiplyAll = arr => {
    return arr.reduce((acc, cur) => acc * cur)
}

module.exports = {
    getFile,
    getLines,
    getFileLines,
    splitByEmptyLine,
    getNumbers,
    sortNumbers,
    multiplyAll
};