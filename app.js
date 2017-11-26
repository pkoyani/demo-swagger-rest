import SwaggerExpress from 'swagger-express-mw';
import express from 'express';
import helmet from 'helmet';
import bearerTokenSecurityHandler from './api/helpers/swaggerSecurityHandlers';

let app = express();
let config = {
  appRoot: __dirname, // required config
  swaggerSecurityHandlers: {
    /* In the swagger file we have defined the the security definition as follows:
      securityDefinitions:
        Bearer:
          type: "apiKey"
          name: "Authorization"
          in: "header"
      The key for the swaggerSecurityHandler function will be key for the security definition -
      in this case Bearer.
      The type is "apiKey" so the scopesOrApiKey param in the security handler function will
      hold our token extracted based on the "name" property and "in" prop 
      from our security definition - req.headers['Authorization']      
    */
    Bearer: bearerTokenSecurityHandler  
    
  }
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  app.use(helmet());
  swaggerExpress.register(app);

  let port = process.env.PORT || 10010;
  app.listen(port);
  console.log(`listening on port ${port}`);
});
export default app; // for testing
