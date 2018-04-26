// посчитать сумму всех чисел
const arr = [
    10, 5, -10, 2.25, '10', '5,33', '4.55', 'abc', '45b', true, false, NaN, Infinity, undefined, 
    [5, 12, 2, 22, '5,23'],
    [5, 12, true, false],
    function () {
        return 10;
    },
    {
        name: 'abc',
        cost: '5',
        count: 3,
        numbers: [1, 5, '45abcd', 33, 0, 23, {
               name: 'abc',
               cost: ['5', 77, '68', '', 5, 98],
               count: 3
           }
       ]
    },
    {
        name: 'abc',
        cost: '5',
        numbers: [1, 5, 33],
        count: {
            props: 4,
            area: 7
        }
    }
];

function sum (element) {
    let total = 0;

    // check wich function return true
    switch (true) {
        case isNumber(element):
            total += element; // just add to total
            break;

        case Array.isArray(element):
            for (let i = 0; i < element.length; i++) {
                total += sum(element[i]); // recursive call "sum" for each array element
            }
            break;

        case isString(element):
            const checkString = parseFloat(element.replace(',', '.')); // try to convert string to number
            total += isNaN(checkString) ? 0 : checkString; // add to total if success
            break;

        case isFunction(element):
            total += sum(element()); // call function and recursive call "sum" for result
            break;

        case isObject(element):
            for (var key in element) {
                total += sum(element[key]);  // recursion call "sum" for each object property
            }
            break;

        default:
            break; // do nothing with bool, NaN, Infinity and undefined
    }

    return total;
}

// Returns if a value is a string
function isString (value) {
    return typeof value === 'string' || value instanceof String;
};

// Returns if a value is really a number
function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
};

// Returns if a value is a function
function isFunction (value) {
    return typeof value === 'function';
};

// Returns if a value is an object
function isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
};

document.getElementById('result').innerHTML = sum(arr);
