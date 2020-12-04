const { getFile, getLines } = require('./helpers');

const parsePasswords = passwordsString => {

    return getLines(passwordsString).map(password => {
        const splitPassword = password.split(' ');
        const splitCount = splitPassword[0].split('-');

        return {
            min: splitCount[0],
            max: splitCount[1],
            letter: splitPassword[1].slice(0, 1),
            password: splitPassword[2]
        }
    })
}

const getValidPasswords = passwords => {
    return passwords.filter(password => {
        const letterCount = password.password.split('').filter(letter => letter === password.letter).length;
        if (letterCount >= password.min && letterCount <= password.max) {
            return true;
        }
        return false;
    })
}

module.exports = {
    parsePasswords,
};

// getFile('./D2.mock').then(data => console.log(getValidPasswords(parsePasswords(data)).length));
// getFile('./D2.puzzle').then(data => console.log(getValidPasswords(parsePasswords(data)).length));