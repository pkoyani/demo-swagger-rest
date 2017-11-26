const bearerTokenSecurityHandler = (req, authOrSecDef, scopesOrApiKey, next) => {
  /*
    In the swagger file we have defined the the security definition as follows:
      securityDefinitions:
        Bearer:
          type: "apiKey"
          name: "Authorization"
          in: "header"
    The type is "apiKey" so the scopesOrApiKey param in the security handler function will
    hold our token extracted based on the "name" property and "in" prop
    from our security definition - req.headers['Authorization']
  */
  const token = scopesOrApiKey; // extracted from req.headers['Authoization']
  // do the required verification with the token.
  // for the POC, hard-coding the logic
  if (token === 'abracadabra') {
    next(null);
  } else {
    next({
      message: 'Access denied',
      code: 'app_specific_code',
      statusCode: 403,
      headers: [],
    });
  }
};

export default bearerTokenSecurityHandler;
