const { getFileLines, multiplyAll } = require('./helpers');
const { getCharsHit } = require('./D3-1');

const getMultiCharsHit = input => {
    const output = [];

    for (const slop of input.slops) {
        const { right, down } = slop;
        output.push(getCharsHit({char: '#', grid: input.grid, right, down}));
    }

    return output;
}

getFileLines('./D3.puzzle').then(data => console.log(multiplyAll(getMultiCharsHit({
    slops: [
        {right: 1, down: 1},
        {right: 3, down: 1},
        {right: 5, down: 1},
        {right: 7, down: 1},
        {right: 1, down: 2},
    ],
    grid: data
}))));