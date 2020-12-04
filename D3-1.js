const { getFileLines } = require('./helpers');

const getGridChar = input => {
    const { x, y, grid } = input;
    // console.log((x - (Math.floor(x / grid[y].length) * grid[y].length)));
    return grid[y] ? grid[y][x >= grid[y].length ? x - (Math.floor(x / grid[y].length) * grid[y].length) : x] : null;
}

const getCharsHit = input => {
    const { char, grid, right, down } = input;
    const location = {x: 0, y: 0};
    let charCache = getGridChar({...location, grid});
    let count = 0;

    while (charCache !== null) {
        location.x += right;
        location.y += down;
        charCache = getGridChar({...location, grid});
        // console.log(charCache, location);
        charCache === char && count ++;
    }

    return count;
}

module.exports = { getCharsHit };
// getFileLines('./D3.puzzle').then(data => console.log(getCharsHit({char: '#', grid:data, right: 3, down: 1})));