fs = require('fs');
file = './D1.puzzle';

const parseData = data => {
    return data.trim().split(/\r?\n/).map(num => parseInt(num));
}

const repairReport = (input = `
    1721
    979
    366
    299
    675
    1456
`) => {
    const numArr = parseData(input);

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

    return 'Combo Not Found!';
}

fs.readFile(file, 'utf8', (err, data) => console.log(repairReport(data)));
