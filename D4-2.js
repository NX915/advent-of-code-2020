const { getFile, splitByEmptyLine } = require('./helpers');

const getInvalidPassports = passports => {
    let count = 0;
    return passports.filter(passport => {
        const checks = [
            {field:'byr', valid: (data) => 1920 <= Number(data) && Number(data) <= 2002},
            {field:'iyr', valid: (data) => 2010 <= Number(data) && Number(data) <= 2020},
            {field:'eyr', valid: (data) => 2020 <= Number(data) && Number(data) <= 2030},
            {field:'hgt', valid: (data) => {
                if (data.includes('cm')) {
                    return RegExp(`^[0-9]+cm$`).test(data) && 150 <= parseInt(data) && parseInt(data) <= 193;
                } else if (data.includes('in')) {
                    return RegExp(`^[0-9]+in$`).test(data) && 59 <= parseInt(data) && parseInt(data) <= 76;
                } else {
                    return false;
                }
            }},
            {field:'hcl', valid: (data) => RegExp(`^#[0-9a-f]{6}$`).test(data)},
            {field:'ecl', valid: (data) => {
                const hairColors = [
                    'amb',
                    'blu',
                    'brn',
                    'gry',
                    'grn',
                    'hzl',
                    'oth',
                ]

                for (const hairColor of hairColors) {
                    if (data === hairColor)
                        return true;
                }

                return false;
            }},
            {field:'pid', valid: (data) => RegExp(`^[0-9]{9}$`).test(data)},
        ]

        // console.log('---')
        // console.log(passport)
        const pass = checks.filter(check => {
            const matchResult = passport.match(`${check.field}:[A-Za-z0-9_#]{0,100}`);
            const matchData = matchResult ? matchResult[0].split(':')[1] : null;

            // console.log(check.field, matchData , matchData && check.valid(matchData));

            return matchResult && matchResult.length === 1 && matchData && check.valid(matchData);
        }).length === checks.length;
        pass && count++;
        // console.log(pass, count);
        return pass;
    })
}

// getFile('./D4.mock').then(data => console.log(getInvalidPassports(splitByEmptyLine(data)).length));
getFile('./D4.puzzle').then(data => console.log(getInvalidPassports(splitByEmptyLine(data)).length));