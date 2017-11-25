import util from 'util';
import {getPersonById,insertPerson,updatePerson,deletePerson} from '../services/Person';
import {serialize} from 'class-transformer';
import validate from '../validators/person';

/*

 For a controller you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

 */

/*
  Functions in controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
 const getPerson=(req, res)=>{
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  let personId = req.swagger.params.personId.value;
  getPersonById(personId)
    .then(person => {
      if (person) {
        res.status(200).json(serialize(person));
      } else {
        res.status(404).send({"message":"Person not found"});
      }
  })
  .catch((err) => {
    res.status(500).send({"message":err});
  });
}

const post=(req, res)=>{
  validate(req.body).then(result=>{
    if (result.isValid){
      insertPerson(req.body)
        .then(person => {
          if (person) {
            res.status(200).json(serialize(person));
          }
      })
      .catch((err) => {
        res.status(500).send({"message":err});
      });
    }
    else{
      res.status(400).send({"message":result.message});
    }
  })
  .catch((err) => {
    res.status(500).send({"message":err});
  });
}

const put=(req, res)=>{
  validate(req.body).then(result=>{
    if (result.isValid){
      updatePerson(req.body)
        .then(person => {
          if (person) {
            res.status(200).json(serialize(person));
          } else {
            res.status(404).send({"message":"Person not found"});
          }
      })
      .catch((err) => {
        res.status(500).send({"message":err});
      });
    }
    else{
      res.status(400).send({"message":result.message});
    }
  })
  .catch((err) => {
    res.status(500).send({"message":err});
  });
}


const del=(req, res)=>{
  let personId = req.swagger.params.personId.value;
  deletePerson(personId)
    .then(result => {
      if (result) {
        res.status(204).send();
      } else {
        res.status(404).send({"message":"Person not found"});
      }
  })
  .catch((err) => {
    res.status(500).send({"message":err});
  });
}

export {getPerson,post,put,del};


