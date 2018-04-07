var input_field = document.getElementById('input');
var output_field = document.getElementById('output');
var output_template = output_field.innerHTML;

var button_getLastSymbol = document.getElementById('task-1');
var button_withoutLastSymbol = document.getElementById('task-2');
var button_reverseString = document.getElementById('task-3');
var button_formatSpaces = document.getElementById('task-4');

button_getLastSymbol.addEventListener('click', getLastCharacter);
button_withoutLastSymbol.addEventListener('click', withoutLastCharacter);
button_reverseString.addEventListener('click', reverseString);
button_formatSpaces.addEventListener('click', formatting);

function getInputValue() {
    return input_field.value;
}

function getLastCharacter() {
    var printLastSymbol = function (string) {
        var stringLength = string.length;

        for (var i in string) {
            if (+i === stringLength - 1) {
                return string[i];
            }
        }
    };

    var stringLengthMethod = function (string) {
        var stringLength = string.length;
        return string[stringLength - 1];
    };

    var lastSymbol = function (string) {
        return printLastSymbol(string);
        // return stringLengthMethod(string);
    };

    var input = getInputValue();
    output_field.innerHTML = output_template + lastSymbol(input);
}

function withoutLastCharacter() {
    var printWithoutLast = function (string) {
        var withoutLastString = string[0];
        var stringLength = string.length;

        for (var i = 1; i < stringLength; ++i) {
            withoutLastString += string[i];
        }

        return withoutLastString;
    };

    var substringMethod = function (string) {
        var stringLength = string.length;
        return string.substr(0, stringLength - 1)
    };

    var getWithoutLast = function (string) {
        return printWithoutLast(string);
        //return substringMethod(string)
    };

    var input = getInputValue();

    output_field.innerHTML = output_template + getWithoutLast(input);
}

function reverseString() {
    var recursiveReverse = function (string) {
        if (string[1] !== undefined) {
            return recursiveReverse(string.slice(1)) + string[0];
        }

        return string[0];
    };

    var splitReverse = function (string) {
        return string.split('').reverse().join('');
    };

    var reverse = function (string) {
        return recursiveReverse(string);
        // return splitReverse(string)
    };

    var input = getInputValue();

    output_field.innerHTML = output_template + reverse(input);
}

function formatting() {
    var spaceSorting = function (string) {
        return string.trim().replace(/\s+/g, ' ');
    };

    var stateMachine = function (string) {
        var STATE_BEGIN = 'Begin';
        var STATE_SPACE = 'Space';
        var STATE_WORD = 'Word';
        var state = STATE_BEGIN;
        var formattedString = '';

        for (var i in string) {
            if (string[i] !== ' ') {
                if (state === STATE_SPACE) {
                    formattedString += (' ' + string[i]);
                    state = STATE_WORD;
                } else {
                    formattedString += string[i];
                    state = STATE_WORD;
                }
            } else if (state !== STATE_BEGIN) {
                state = STATE_SPACE;
            }
        }

        return formattedString;
    };

    var formatString = function (string) {
        //return spaceSorting(string);
        return stateMachine(string);
    };

    var input = getInputValue();

    output_field.innerHTML = output_template + formatString(input);
}
