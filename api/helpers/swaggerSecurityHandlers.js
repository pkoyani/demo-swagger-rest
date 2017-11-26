const bearerTokenSecurityHandler = (req, authOrSecDef, scopesOrApiKey, next) => {
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
