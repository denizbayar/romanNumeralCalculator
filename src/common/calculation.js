import { decimal, roman } from './constants';

function calculate(firstNumber, secondNumber, operator) {
    return new Promise((resolve, reject) => {
        let num1 = fromRoman(firstNumber.toUpperCase());
        let num2 = fromRoman(secondNumber.toUpperCase());
        switch (operator) {
            case 'add':
                if (num1 + num2 > 3999) reject('Total number can not be more than 3999')
                resolve(toRoman(num1 + num2))
                break
            case 'subs':
                if (num1 - num2 > 3999 || num1 - num2 <= 0) reject('Roman numerals does not contain negative numbers and 0.')
                resolve(toRoman(num1 - num2))
                break
            case 'mult':
                (num1 * num2) > 3999 ? reject('Total number can not be more than 3999') : resolve(toRoman(num1 * num2));
                break
            case 'div':
                if (num1 / num2 > 3999) reject('Total number can not be more than 3999')
                else if (!Number.isInteger(num1 / num2)) {
                    reject('Roman numerals only containes whole number')
                } else {
                    resolve(toRoman((num1 / num2)))
                }
                break
            default:
                reject('error occured!')
        }
    });
}

function toRoman(number) {
    let romanized = "";
    for (let i = 0; i < roman.length; i++) {
        while (number >= decimal[i]) {
            romanized += roman[i];
            number -= decimal[i];
        }
    }
    console.log(Number.isInteger(romanized));
    return romanized;
}


function fromRoman(char) {
    console.log(char)
    var number = 0;
    var canNotIncrease = 1001; //Error check Roman should be ordered bigger to smaller!
    for (let i = 0; i < char.length; i++) {
        let firstIndex = roman.indexOf(char[i]);
        let secondIndex = (i + 1 >= char.length) ? decimal.length - 1 : roman.indexOf(char[i + 1]);
        if (decimal[firstIndex] >= decimal[secondIndex]) {
            if (canNotIncrease < decimal[firstIndex]) {
                throw new Error("Please enter valid Roman Numerial!");
            }
            canNotIncrease = decimal[firstIndex];
            number += decimal[firstIndex];
        } else {
            canNotIncrease = decimal[secondIndex] - decimal[firstIndex];
            number += decimal[secondIndex] - decimal[firstIndex];
            i++;
        }
    }
    console.log(number)
    return number;
}
export default calculate;
