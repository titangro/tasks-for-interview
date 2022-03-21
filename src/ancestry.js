import { ANCESTRY_FILE } from './data';
import { logger, average } from './helpers';
// http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/
// point 12, 13

console.log('ANCESTRY FILE OPEN ---->');

const getAncentryFromFile = () => {
  return JSON.parse(ANCESTRY_FILE);
};

const getAncentryByName = (ancentry) => {
  return ancentry.reduce((currentAncentry, person) => {
    currentAncentry[person.name] = person;
    return currentAncentry;
  }, {});
};

const calculateAverageAgeMotherAndChild = (ancentry) => {
  const ancentryByName = getAncentryByName(ancentry);

  const averageAgesDiffMotherAndChild = [];

  for (const person of ancentry) {
    if (ancentryByName[person.mother]) {
      const averageAgeDiffMotherAndChild =
        person.born - ancentryByName[person.mother].born;

      averageAgesDiffMotherAndChild.push(averageAgeDiffMotherAndChild);
    }
  }

  return Number(average(averageAgesDiffMotherAndChild).toFixed(1));
};

const calculateAverageAgeByCenturies = (ancentry) => {
  const averageAgesbyCenturies = {};

  for (const person of ancentry) {
    const centrury = Math.ceil(person.died / 100);
    const personAge = person.died - person.born;

    if (!averageAgesbyCenturies[centrury]) {
      averageAgesbyCenturies[centrury] = [];
    }

    averageAgesbyCenturies[centrury].push(personAge);
  }

  for (const century of Object.keys(averageAgesbyCenturies)) {
    averageAgesbyCenturies[century] = Number(
      average(averageAgesbyCenturies[century]).toFixed(1),
    );
  }

  return averageAgesbyCenturies;
};

const every = (array, comparation) => {
  for (const item of array) {
    if (!comparation(item)) {
      return false;
    }
  }

  return true;
};

const some = (array, comparation) => {
  for (const item of array) {
    if (comparation(item)) {
      return true;
    }
  }

  return false;
};

logger(average, [5, 6, 4, 5, 6, 7, 4]);
logger(getAncentryFromFile);
logger(getAncentryByName, getAncentryFromFile());
logger(calculateAverageAgeMotherAndChild, getAncentryFromFile());
logger(calculateAverageAgeByCenturies, getAncentryFromFile());
logger(every, [NaN, NaN, NaN], isNaN);
logger(every, [NaN, NaN, 4], isNaN);
logger(some, [NaN, 3, 4], isNaN);
logger(some, [2, 3, 4], isNaN);
