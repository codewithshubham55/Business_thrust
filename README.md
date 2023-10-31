# vue-store-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
This is a simple Vue.js E-commerce application that allows users to browse and add products to their cart. It demonstrates the basic structure and functionality of an e-commerce platform.


## Features

- Display a list of products, including their details.
- Add products to the shopping cart.
- Calculate the order total, including discounts and taxes.
- Submit the order for purchase.

## Technologies Used

- [Vue.js]
- [Vuex]
- [Axios]
- HTML and CSS: For the structure and styling of the application.

## Project Setup

1. Clone this repository to your local machine:

Directory Structure
src/ - Contains the Vue.js application source code.
assets/ - Stores static assets like images.
components/ - Vue components for building the application.
store/ - Vuex store configuration.
views/ - Application views and routes.
public/ - Contains the main HTML file and other public assets.
README.md - This file.

Browse the list of available products.
Click the "Add" button to add a product to your shopping cart.
The order summary will be updated with the total price, discounts, and tax.
Enter your customer name and click "Submit Order" to finalize the purchase.


1...

login :-
I have used login dummy api which returns us a token u can find valid username and password through this api https://dummyjson.com/auth/login

use these to get authenticate defined a action login in which it saves response access token in local storage as well as in  axios default header 

First route will be / which is set to login u can find them in index/router for refrence 
when user get authenticated state is changed to true also we did redirect it to products page 
and where we can see  the list of products 

in which have defined action fetchProducts which fetch products and store them into array then we wil be able to see in product list page 

on top of page there are two buttons one is to add products and add orders

if we click on add product it will redirect to add-product page and then add the product  it is dummy api 'https://dummyjson.com/users/add' through a unique identifier it will give  the  response of added order but not update real json

same in update api trigger it through button placed in botom of prodcust card push unique id in route params and then perform action of updation it will update but not manipulate real data on server



in add orders we pushed a default id 1 as param u can  change the param to see different id's cart
have used this api "https://dummyjson.com/carts/1"

by default it will redirect on  1 id .



