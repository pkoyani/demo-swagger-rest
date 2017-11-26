
const validate = person =>
  new Promise((resolve, reject) => {
    try {
      resolve({ isValid: true, message: '' });
    } catch (err) {
      reject(err);
    }
  });
export default validate;
