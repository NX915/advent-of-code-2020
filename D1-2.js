const { getNumbers, sortNumbers } = require('./helpers');
const { findPair } = require('./D1-1');

const findTriple = (data, target = 2020) => {
    const numArr = sortNumbers(data);
    // console.log(data);
    // console.log(numArr);

    for (let i = 0; i < numArr.length - 2; i++) {
        const pairNum = findPair(numArr.slice(i + 1), target - numArr[i]);
        
        if (pairNum !== null) {
            return pairNum * numArr[i];
        }
    }

    return null;
}

getNumbers('./D1.puzzle').then(data => {
    console.log(findTriple(data));
})