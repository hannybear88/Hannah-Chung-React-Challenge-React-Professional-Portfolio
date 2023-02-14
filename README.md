# React-Challenge-React-Portfolio
HW CHALLENGE #20

## Description
Our task for this challenge is to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

To build this text editor,we will start with an existing application and implement methods for getting and storing data to an IndexedDB database. We will use a package called `idb`, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla. [click here](https://github.com/hannybear88/Progressive-Web-Applications--PWA--Challenge-Text-Editor/tree/main/client/src/js)to see my code for this project.


## Table of Contents
* [Installation](#installation)
* [Getting Started with Create React App](#Getting-Started-with-Create-React-App)
* [Tests](#Tests)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Usage](#Usage)
* [Demo](#Demo)
* [Technologies Used](#Technologies-Used)
* [Support](#Support)
* [Credits](#Credits)
* [Contributors](#Contributors)


## Installation
1. Clone the repo
2. Install all dependencies 
    - `npm init -y`
    - `npm` install 
3. Start the server 
4.   - `npm` start

5. Open Insomnia Core to test API routes

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Tests
Testing restful API calls with Insomnia Core
[click here](https://docs.insomnia.rest/insomnia/install) to install Insomnia


## User Story
- AS A developer
- I WANT to create notes or code snippets with or without an internet connection
- SO THAT I can reliably retrieve them for later use


## Acceptance Criteria
- GIVEN a text editor web application
- WHEN I open my application in my editor
- THEN I should see a client server folder structure
- WHEN I run `npm run start` from the root directory
- THEN I find that my application should start up the backend and serve the client
- WHEN I run the text editor application from my terminal
- THEN I find that my JavaScript files have been bundled using webpack
- WHEN I run my webpack plugins
- THEN I find that I have a generated HTML file, service worker, and a manifest file
- WHEN I use next-gen JavaScript in my application
- THEN I find that the text editor still functions in the browser without errors
- WHEN I open the text editor
- THEN I find that IndexedDB has immediately created a database storage
- WHEN I enter content and subsequently click off of the DOM window
- THEN I find that the content in the text editor has been saved with IndexedDB
- WHEN I reopen the text editor after closing it
- THEN I find that the content in the text editor has been retrieved from our IndexedDB
- WHEN I click on the Install button
- THEN I download my web application as an icon on my desktop
- WHEN I load my web application
- THEN I should have a registered service worker using workbox
- WHEN I register a service worker
- THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
- WHEN I deploy to Heroku
- THEN I should have proper build scripts for a webpack application


## Usage


## Demo


Click on the button below to be directed straight to the Heroku deployed application

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://nosql-social-network-api.herokuapp.com/)

Screenshots
<!-- **TAGS**

* GET all tags 
![Get all tags](assets/images/GET_all_tags_screenshot.png)

* GET one tag by id
![GET one tag by id](assets/images/GET_one_tag_by_id_screenshot.png)

* CREATE new tag
![CREATE new tag](assets/images/CREATE_new_tag_screenshot.png)

* CREATE one tag by id after creating new tag
![CREATE one tag by id after creating new tag](assets/images/GET_one_tag_by_id_after_creating_new_tag_screenshot.png)

* UPDATE tag by id
![UPDATE tag by id](/assets/images/UPDATE_tag_by_id.png)

* GET one tag by id after updating new tag 
![GET one tag by id after updating new tag ](/assets/images/GET_one_tag_by_id_after_updating_new_tag_screenshot.png)

* DELETE tag by id
![DELETE tag by id](assets/images/DELETE_tag_by_id_screenshot.png)

**PRODUCTS**

* GET all products
![GET all products](/assets/images/GET_all_products_screenshot.png)

* GET one product by id
![GET one product by id](/assets/images/GET_one_product_by_id_screenshot.png)

* CREATE new product
![CREATE new product](/assets/images/CREATE_new_product_screenshot.png)

* CREATE one product by id after creating new product
![CREATE one tag by id after creating new tag](assets/images/GET_one_product_by_id_after_creating_new_product_screenshot.png)

* UPDATE product by id
![UPDATE product by id](/assets/images/UPDATE_product_by_id.png)

* GET one product by id after updating new product
![GET one tag by id after updating new tag ](/assets/images/GET_one_product_by_id_after_updating_new_product_screenshot.png)

* DELETE product by id
![DELETE product by id](/assets/images/DELETE_product_by_id_screenshot.png)

**CATEGORIES**

* GET all categories
    ![GET all categories](/assets/images/GET_all_categories_screenshot.png)

* GET one cateogry by id
    ![GET one category by id](/assets/images/GET_one_category_by_id_screenshot.png)

* CREATE new category
![CREATE new category](/assets/images/CREATE_new_category_screenshot.png)

* CREATE one category by id after creating new category
![CREATE one tag by id after creating new tag](assets/images/GET_one_category_by_id_after_creating_new_category_screenshot.png)


* UPDATE category by id
![UPDATE category by id](/assets/images/UPDATE_category_by_id.png)

* GET one category by id after updating new category
![GET one tag by id after updating new tag ](/assets/images/GET_one_category_by_id_after_updating_new_category_screenshot.png)

* DELETE category by id
![DELETE category by id](/assets/images/DELETE_category_by_id_screenshot.png) -->


## Technologies Used

![Technologies](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Technologies](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/npm%20package-moment-%3CCOLOR%3E?style=flat-square&logo=npm)
![Technologies](https://img.shields.io/badge/npm%20package-express-green?style=flat-square&logo=npm)
![Technologies](https://img.shields.io/badge/npm%20package-mongoose-purple?style=flat-square&logo=npm) 
![Technologies](https://img.shields.io/badge/Database-MongoDB-yellow?style=flat-square&logo=mongoDB) 


## Support
If you need support or have any questions about the repo, please [open an issue](https://github.com/hannybear88/Model-View-Controller--MVC--Challenge-Tech-Blog/issues) or contact me via email at hannahkchung88@gmail.com. You can find more of my work on my GitHub, [hannybear88](https://github.com/hannybear88/).


## Credits
- Starter code provided by UCSD 
- Code by Hannah Chung


## Contributors
- Starter code provided by UCSD 
- Code by Hannah Chung


