const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    const strInputs = data.split('\n');
    let result = 0;
    let regex = /one|two|three|four|five|six|seven|eight|nine|\d/g;
    for (i = 0; i < strInputs.length; i++) {
        let number = 0;
        const matchedDigits = strInputs[i].match(regex);
        const matchedDigits2 = strInputs[i].slice(matchedDigits[0].length - 1).match(regex);
        const firstDigit = map(matchedDigits[0]);
        let lastDigit = firstDigit;
        if (matchedDigits2 != null)
            lastDigit = map(matchedDigits2[matchedDigits2.length - 1]);
        if (isNaN(firstDigit) || isNaN(lastDigit))
            continue;
        if (firstDigit === lastDigit)
            number = firstDigit * 10 + firstDigit;
        else 
            number = firstDigit * 10 + lastDigit;

            console.log(number);
        result += number;
    }

    console.log('Result: ' + result);
});

function map(chars) {
    switch (chars) {
        case 'one':
            return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
        case 'six':
            return 6;
        case 'seven':
            return 7;
        case 'eight':
            return 8;
        case 'nine':
            return 9;
        default: 
            return parseInt(chars);
    }
}
