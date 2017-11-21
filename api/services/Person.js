
 import Person from '../models/Person';
 import {serialize} from "class-transformer";
 
 //for the POC just returning a hard-coded person
 const  getPersonById=(id)=>  
        serialize(new Person ({firstName:'Murali',lastName:'Narasimhan'}));

 export {getPersonById};

