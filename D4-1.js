const { getFile, splitByEmptyLine } = require('./helpers');

const getInvalidPassports = passports => {
    return passports.filter(passport => {
        const checks = [
            'byr',
            'iyr',
            'eyr',
            'hgt',
            'hcl',
            'ecl',
            'pid',
        ]
        return checks.filter(check => passport.match(`${check}:`)).length === checks.length;
    })
}

getFile('./D4.mock').then(data => console.log(getInvalidPassports(splitByEmptyLine(data)).length));
getFile('./D4.puzzle').then(data => console.log(getInvalidPassports(splitByEmptyLine(data)).length));