


//const validate=(person)=>{return {result:true,message:''};}

const  validate=(person)=>  {
    return new Promise(function(resolve,reject){
        try{
            resolve({isValid:true,message:''});
        }
        catch (err) {
            reject(err);
        }
    });
 }


export default validate;