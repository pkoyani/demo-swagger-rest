
 import Person from '../models/Person';

 
 //for the POC just returning a hard-coded person
 const  getPersonById=(id)=>  {
    return new Promise(function(resolve,reject){
        resolve(new Person ({firstName:'Murali',lastName:'Narasimhan'}));
    });
 }
        

 export {getPersonById};

