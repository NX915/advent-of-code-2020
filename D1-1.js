const { getNumbers } = require('./helpers');

const findPair = data => {
    console.log(data)
    const numArr = [...data];

    numArr.sort((a, b) => a - b);
    console.log(numArr);

    const counts = {
        sum: 0,
        tailCount: numArr.length - 1,
        headCount: 0,
        cycle: 0,
    }
    let { sum, tailCount, headCount, cycle } = counts;

    // while (cycle <= Math.ceil(numArr.length / 2)) {
    while (headCount <= tailCount && sum !== 2020) {
        sum = numArr[headCount] + numArr[tailCount];
        console.log(sum, cycle);

        if (sum === 2020) {
            return numArr[headCount] * numArr[tailCount];
        } else if (sum < 2020) {
            headCount++;
        } else {
            tailCount--;
        }

        cycle++;
    }

    return null;
}

const repairReport = (file = '') => {

    getNumbers(file).then(data => {
        console.log(findPair(data));
    });
    
}

module.exports = {
    repairReport,
    findPair,
};

// repairReport('./D1.mock');
// repairReport('./D1.puzzle');
