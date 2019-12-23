Faceapp is an application that will accept a picture and return the same picture with all the faces identified with a box. If the application recognizes a face it will display the name of the person. If not, it will return unknown.

## Getting Started:

1. 'npm install' node modules
2. Download and run the API server found here: https://github.com/etseng02/faceappflask
3. 'npm start' to run the application in development mode

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Steps to produce Docker container and run

docker build -t faceapp .

docker container run -p 3000:3000 -d --name faceapp faceapp
