const { getFileLines } = require('./helpers');

const getRowNumber = code => {
    // console.log(code)
    return code.slice(0, 7).split('').reduce((acc, cur) => {
        const result = cur === 'F' ? [acc[0], acc[0] + Math.floor((acc[1] - acc[0]) / 2) ] : [ acc[1] - Math.floor((acc[1] - acc[0]) / 2), acc[1]]
        // console.log(cur, result)
        return result;
    }, [0, 127])[0];
}

const getColumnNumber = code => {
    return code.slice(-3).split('').reduce((acc, cur) => {
        const result = cur === 'L' ? [acc[0], acc[0] + Math.floor((acc[1] - acc[0]) / 2) ] : [ acc[1] - Math.floor((acc[1] - acc[0]) / 2), acc[1]]
        // console.log(cur, result)
        return result;
    }, [0, 7])[0];
}

const getAllSeatID = data => {
    // console.log(getRowNumber(data[0]));
    // console.log(getColumnNumber(data[0]));
    
    return data.map(code => getRowNumber(code) * 8 + getColumnNumber(code));
}

module.exports = {
    getAllSeatID
}

// getFileLines('./D5.mock').then(data => {console.log(Math.max(...getAllSeatID(data)))});
// getFileLines('./D5.puzzle').then(data => {console.log(Math.max(...getAllSeatID(data)))});