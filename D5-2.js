const { getFileLines, sortNumbers } = require('./helpers');
const { getAllSeatID } = require('./D5-1');

const getMissingSeat = idArr => {
    const sortedId = sortNumbers(idArr);
    let count = 0;

    while (count < sortedId.length) {
        if (sortedId[count] !== sortedId[count + 1] - 1)
            return sortedId[count] + 1;
        count++;
    }
    return null;
}

getFileLines('./D5.puzzle').then(data => {console.log(getMissingSeat(getAllSeatID(data)))});