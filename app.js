import SwaggerExpress from 'swagger-express-mw';
import YAML from 'yamljs';
import express from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import bearerTokenSecurityHandler from './api/helpers/swaggerSecurityHandlers';

const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');
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
    */
    Bearer: bearerTokenSecurityHandler  
    
  }
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  app.use(helmet());
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  swaggerExpress.register(app);

  let port = process.env.PORT || 10010;
  app.listen(port);
  console.log(`listening on port ${port}`);
});
export default app; // for testing
