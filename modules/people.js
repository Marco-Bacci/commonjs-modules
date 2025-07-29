const getNames = require("./names");
const getHobbies = require("./hobbies");

const createObject = () => {
  return {
    fullName: getNames("Marco", "Bacci"),
    hobbies: getHobbies("calcio", "nuoto", "tennis"),
  };
};

module.exports = createObject;

// const getNames = require("./names");
// const getHobbies = require("./hobbies");

// const createObject = () => {
//   const fullName = getNames("Marco", "Bacci");
//   const hobbies = getHobbies("calcio", "nuoto", "tennis");

//   return {
//     fullName,
//     hobbies,
//   };
// };

// module.exports = createObject;
