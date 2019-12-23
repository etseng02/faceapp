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

## Final Product

You can upload a picture to identify faces in an image. Or you can train the application to recognize images.

!["Identifying a face"](https://github.com/etseng02/faceapp/blob/master/Docs/1.png)

After identifying pictures in a face the application will append the image to the page. The image will identify faces it has been trained on and will display unknown for faces it has not been trained on.

!["Appending results to main page"](https://github.com/etseng02/faceapp/blob/master/Docs/2.png)
