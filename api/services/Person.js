
 import Person from '../models/Person';

 //for the POC just returning a hard-coded person
 const  getPersonById=(id)=>  {
    return new Promise(function(resolve,reject){
        resolve(new Person ({firstName:'Murali',lastName:'Narasimhan'}));
    });
 }

 const  updatePerson=(person)=>  {
    return new Promise(function(resolve,reject){
        resolve(person);
    });
 }

 const  insertPerson=(person)=>  {
    return new Promise(function(resolve,reject){
        resolve(person);
    });
 }

 const  deletePerson=(personId)=>  {
    return new Promise(function(resolve,reject){
        resolve(true);
    });
 }
        

 export {getPersonById,updatePerson,insertPerson,deletePerson,};

