const { getFile, splitByEmptyLine } = require('./helpers');

const countAnswers = answers => {
    // console.log(answers)
    return answers.map(answer => {
        const track = [];
        // console.log(answer.split('').filter(char => char !== '\r' && char !== '\n'));
        for (const letter of answer.split('').filter(char => char !== '\r' && char !== '\n')) {
            // console.log(track)
            if (!track.includes(letter))
                track.push(letter);
        }
        return track.length;
    });
}

getFile('./D6.mock').then(data => console.log(countAnswers(splitByEmptyLine(data)).reduce((acc, cur) => acc + cur, 0)));
getFile('./D6.puzzle').then(data => console.log(countAnswers(splitByEmptyLine(data)).reduce((acc, cur) => acc + cur, 0)));