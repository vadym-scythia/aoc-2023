const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    const strings = data.split('\n');
    let result = 0;
    let regex = /\d/g;
    for (i = 0; i < strings.length; i++) {
        let number;
        const digitsChars = strings[i].match(regex);
        const firstDigit = digitsChars[0];
        if (digitsChars.length == 1)
            number = parseInt(firstDigit) * 10 + parseInt(firstDigit);
        else 
            number = parseInt(firstDigit) * 10 + parseInt(digitsChars[digitsChars.length - 1]);

        //console.log(number);
        result += number;
    }

    console.log(result);
});