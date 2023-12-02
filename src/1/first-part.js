const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    const strInputs = data.split('\n');
    let result = 0;
    let regex = /\d/g;
    for (i = 0; i < strInputs.length; i++) {
        let number;
        const matchedDigits = strInputs[i].match(regex);
        const firstDigit = matchedDigits[0];
        if (matchedDigits.length == 1)
            number = parseInt(firstDigit) * 10 + parseInt(firstDigit);
        else 
            number = parseInt(firstDigit) * 10 + parseInt(matchedDigits[matchedDigits.length - 1]);

        //console.log(number);
        result += number;
    }

    console.log(result);
});