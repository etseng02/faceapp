This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Steps to produce Docker container and run

docker build -t faceapp .

Successfully built 14f19e92e12e

docker run -p 3000:3000 -d faceapp
