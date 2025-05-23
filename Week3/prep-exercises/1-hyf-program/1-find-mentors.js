import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
let possibleMentors = [];
// TODO complete this function
const possibleMentorsForModule = (moduleName) => {
  for (let mentor of mentors) {
    if (mentor.canTeach.includes(moduleName)) {
      possibleMentors.push(mentor.name);
    }
  }
  return possibleMentors;
};

// You can uncomment out this line to try your function
console.log(possibleMentorsForModule("using-apis"));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  // TODO complete this function
  if (randomPossibleMentors.length === 0) {
    return null;
  }
  const randomPossibleMentors = possibleMentorsForModule(moduleName);
  const numMentors = randomPossibleMentors.length;
  const randomIndex = Math.floor(Math.random() * numMentors);
  const chosenMentor = randomPossibleMentors[randomIndex];
  return chosenMentor;
};
// You can uncomment out this line to try your function
console.log(findMentorForModule("javascript"));
