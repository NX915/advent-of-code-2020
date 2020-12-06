const { getFile, splitByEmptyLine } = require('./helpers');

const countAnswers = answers => {
    // console.log(answers)
    return answers.map(answer => {
        const [ groups ] = answer.trim().split('/\r?\n/');
        // console.log(groups);
        const individuals = groups.split('\r\n');
        // console.log('ind', individuals);
        const testResult = individuals.reduce((acc, cur) => {
            const {accept, reject} = acc;

            // console.log(cur);
            for (const char of cur) {
                if (!accept.includes(char) && !reject.includes(char)) {
                    //false if answer in missing from an individual
                    if (individuals.reduce((acc, cur) => acc === true && cur.includes(char), true)) {
                        accept.push(char);
                    } else {
                        reject.push(char);
                    }
                }
            }

            return {accept, reject};

        }, {accept: [], reject: []})

        // console.log('result', testResult);
        return testResult.accept.length;
    });
}

// console.log([3, 0, 1 , 1 , 1])
// getFile('./D6.mock').then(data => console.log(countAnswers(splitByEmptyLine(data))));
// getFile('./D6.mock').then(data => console.log(countAnswers(splitByEmptyLine(data)).reduce((acc, cur) => acc + cur, 0)));
getFile('./D6.puzzle').then(data => console.log(countAnswers(splitByEmptyLine(data)).reduce((acc, cur) => acc + cur, 0)));