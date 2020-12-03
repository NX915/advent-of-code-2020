const { getNumbers, sortNumbers } = require('./helpers');

const findPair = (data, target = 2020) => {
    const numArr = sortNumbers(data);
    // console.log(numArr);

    const counts = {
        sum: 0,
        tailCount: numArr.length - 1,
        headCount: 0,
        cycle: 0,
    }
    let { sum, tailCount, headCount, cycle } = counts;

    while (headCount <= tailCount && sum !== target) {
        sum = numArr[headCount] + numArr[tailCount];
        // console.log(sum, cycle);

        if (sum === target) {
            return numArr[headCount] * numArr[tailCount];
        } else if (sum < target) {
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
    getNumbers,
};

// repairReport('./D1.mock');
// repairReport('./D1.puzzle');
