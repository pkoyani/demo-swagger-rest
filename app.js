import SwaggerExpress from 'swagger-express-mw';
import express from 'express';
import helmet from 'helmet';

let app = express();
let config = {
  appRoot: __dirname // required config
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
export  {app}; // for testing