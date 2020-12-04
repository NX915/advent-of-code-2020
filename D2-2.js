const { getFile } = require('./helpers');
const { parsePasswords } = require('./D2-1');

const getValidPasswords = passwords => {
    return passwords.filter(password => {
        const letterCount = password.password.split('').filter((letter, index) => (index === password.min - 1 || index === password.max - 1) && letter === password.letter).length;

        if (letterCount === 1) {
            return true;
        }
        return false;
    })
}

module.exports = {
    parsePasswords,
};

getFile('./D2.mock').then(data => console.log(getValidPasswords(parsePasswords(data)).length));
getFile('./D2.puzzle').then(data => console.log(getValidPasswords(parsePasswords(data)).length));