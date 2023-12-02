const fs = require('fs');

const dictionary = ["nine","eight","seven","six","five","four","two","three","one","1","2","3","4","5","6","7","8","9"];

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    const strInputs = data.split('\n');
    let result = 0;
    for (let i = 0; i < strInputs.length; i++) {
        let currStr = strInputs[i];
        let newStr = "";
        if (currStr == null){
            console.error("Null string!");
            break;
        }
        for (j = 0; j < currStr.length; j++) {
            newStr += currStr[j];
            let matchResult = match(newStr);
            switch (matchResult.flag) {
                case -1: {
                    //console.log("Symbol wasn't found");
                    break;
                }
                // new symbol created a dictionary word
                case 0: {
                    newStr = matchResult.value.length - 1 === 0 ? 
                        newStr.replace(matchResult.value, "") :
                        newStr.replace(matchResult.value.substring(0, matchResult.value.length - 1), "");
                    result += map(matchResult.value);
                    break;
                }
                default: {
                    console.error("Error in matchResult!");
                    break;
                }
            }
        }
    }

    console.log('Result: ' + result);
});

function match(str) {
    var obj = { flag: Boolean(), value: String() };
    if(isNaN(parseInt(str))) {
        for (i = 0; i < dictionary.length; i++) {
            if (str.includes(dictionary[i])) {
                obj.flag = 0;
                obj.value = dictionary[i];
                return obj;
            }
        }
        obj.flag = -1;
        return obj;
    }
    obj.flag = 1;
    return obj;
}

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