
/**
 * 1-Given an array of integers and an integer n.
 * find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
 * If n is not in the given array, return an empty array [].
 * Assume that n and all values in the given array will always be integers.
 * Example:
 * findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
 *
 * @param {Array} array
 * @param {number} n
 * @return {Array}
 */
let findAll = function (array, n) {
    let result = []
    for (let i = 0; i < array.length(); i++) {
        if (n === array[i]) {
            result = result + i
        }
    }
    return result
}




// 2. write a function that takes a string as an argument
// and returns the string reversed word by word
// Example : reverseWord("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

let reverseWord = (string) => {
    for (let i = -1; i = 0; i--) {
        if (string[i] === " ") {

        }

    }

}
let reverseWord2 = (string) => {
    let arr = [" "]
    arr = [...string]
    for (let i = -1; arr.length = 0; i--) {
        arr.push(arr[i])
    }
    return arr
}


/**
 * 3 - write a function called (sameLength) that takes array of strings and returns an array of the strings that have the same length
 * example :  ['hi','hello','welcome','hy'] ==> ["hi","hy"]
 *
 * @param {Array<string>} array
 * @return {Array<string>}
 */

let sameLength = (array) => {
    let result = []
    for (let i = 0; i < array.length(); i++) {
        for (let j = 1; j < array.length(); j++) {
            if (array[i] === array[j]) {
                result = result + array[i] + array[j]

            }
        }
    }
    return result

}


function sameLength(array) {

}
