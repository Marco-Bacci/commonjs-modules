// primo step
const getNames = require("./modules/names");

const person = getNames("Marco", "Bacci");

console.log(person);

// secondo step
const getHobbies = require('./modules/hobbies')

const hobbies = getHobbies('calcio', 'nuoto', 'tennis') 

console.log(hobbies)