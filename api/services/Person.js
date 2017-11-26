import Person from '../models/Person';

// for the POC just returning a hard-coded person
const getPersonById = id =>
  new Promise((resolve, reject) => {
    try {
      // simulating 404
      if (id === 1000) {
        resolve(null);
      }
      resolve(new Person({ id, firstName: 'Murali', lastName: 'Narasimhan' }));
    } catch (err) {
      reject(err);
    }
  });


const updatePerson = person =>
  new Promise((resolve, reject) => {
    try {
      resolve(person);
    } catch (err) {
      reject(err);
    }
  });


const insertPerson = person =>
  new Promise((resolve, reject) => {
    try {
      const { firstName, lastName } = person;
      resolve({ id: 25, firstName, lastName });
    } catch (err) {
      reject(err);
    }
  });


const deletePerson = personId =>
  new Promise((resolve, reject) => {
    try {
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });

export { getPersonById, updatePerson, insertPerson, deletePerson };

