# 
#  Scandiweb Test assignment (App [Link](https://scandiweb-test-abdelwahab.netlify.app/))
Tools
  * React
  * Styeld components (Responsive)
  * Axios
    
it essentially consists of four components
  * Add-product-form component
  * Data-Fetching-and-Validation
  * Products-Page component
  * Product-Card component

## Add-Product-Form Component
it contains the form through which the user submits a new product

## Data-Fetching-and-Validation
you can call this the gateway to the backend it contains 4 functions

Function Name         | Description
--------------------- | -------------
getProducts           | used to send a get request to get all products from the database to be displayed 
addProduct            | used to send post request to the backend with the form data to store a new product
isFormValid           | used to check the validity of the form data the user entered before sending it to the backend
deleteProducts        | used to send a delete request with the array of products' SKUs, that you've already selected, to the backend to be deleted at once instead of deleting one by one to reduce requests and transactions => **Note**: here the delete request sent as a post request because there the backend forbids using delete requests because of a "CORS" issue. my solution is to create a new route (/products/delete) because my application relies on registering routes and methods ,and I couldn't use the same route with the POST method. 

## Products Page Component
here you will find the structure of the main page
==> it uses the product-card component to display the products fetched in a proper design

## Product-Card Component
here you will find the template for the product card found in the home page.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
