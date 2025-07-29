// primo step
const getNames = require("./modules/names");

const person = getNames("Marco", "Bacci");

console.log(person);

// secondo step
const getHobbies = require('./modules/hobbies')

const hobbies = getHobbies('calcio', 'nuoto', 'tennis') 

console.log(hobbies)

// terzo step 

const createObject = require ('./modules/people')
const finalObject = createObject();

console.log(finalObject)

// quarta soluzione

const getInfo = ()=>{
  return {
    nameInfo: getNames('marco', 'bacci'),
    hobbiesInfo: getHobbies('nuoto', 'calcio', 'carte')
  }
}
console.log(getInfo())


