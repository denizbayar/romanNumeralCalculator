import { roman } from './constants';

var Validation = function (char) {
    console.log(char);
    return new Promise((resolve, reject) => {
        if (char === '') reject("Please enter a number");
        console.log(roman.indexOf(char[0]));
        for (let i = 0; i < char.length; i++) {
            if ((char[i] === roman[2] || char[i] === roman[6] || char[i] === roman[10]) && (char[i] === char[i - 1] || char[i] === char[i + 1])) {
                reject(("Error V,L,D can not be repeated in a raw."));
                return;
            } else if ((char[i] === char[i + 1]) && (char[i] === char[i + 2]) && (char[i] === char[i + 3])) {
                reject(("Repeated number can be max 3 times."));
                return;
            } else if (!roman.includes(char[i])) {
                reject(("Please enter valid Roman numerial."));
                return;
            } else {
                resolve(true);
            }

        }
    })
}
export default Validation;
