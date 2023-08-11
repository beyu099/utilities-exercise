const {largeNumber, cut3} = require('./util/utilOne')
const utilTwo = require('./util/utilTwo')

let array = [120, 1000, 9000, 25000]
let arrayOne = [240, 2000, 18000, 50000]

console.log(largeNumber(array))
console.log(cut3(array))
console.log(utilTwo.sum(array))
console.log(utilTwo.concat(array, arrayOne))