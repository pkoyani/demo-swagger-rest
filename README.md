# demo-swagger-rest
Demo of Swagger 2.0 compliant RESTful API with ExpressJS

1) Install dependencies

        yarn global add swagger
        yarn install

2) Start the server

        yarn start

The API will be available at `http://localhost:10010`.
The Authorization header for this demo is `abracadabra`.

3) Design the API
        
        swagger project edit

The Authorization header for this demo is `abracadabra`.  

4) View the API documentation at `http://localhost:10010/api-docs`    

5) Run the tests

        yarn coverage
    
6) Linting
        
        yarn lint

## Docker

Build
`docker build -t <name:tag> .`
Run
`docker run -p 8080:8080 -d <name:tag>`        

