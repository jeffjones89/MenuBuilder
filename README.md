# MenuBuilder
WDI 6 Group Project

Welcome to Menu Builder, a Node application running on the Express framework, built by Kristin Greenslit, Cheikh Ndiongue, Ryan Kahle, Cameron Fry and Jeff Jones.

This was the third project in General Assembly's Web Development Immersive 6 located in Washington, DC. The app uses the free Nutritionix API to query the user's search input and return items that match the search results. The user can then add individual menu items to their meals and see the total nutritional value in the calculator on the right hand side of the screen.

The app uses Javascript and jQuery to quickly populate and maniuplate the data on the front end. There is currently functionality to save individual meals, and one of the next pieces of functionality the group would like to implement is the syncing of our Twitter login (using Passport.js and OAuth) and the ability to save and redisplay previous meals.

There is a live demo of our appliciation at https://wdi-menubuilder.herokuapp.com/. This is an open source project, so if you would like to contribute please feel free to submit a pull request.

Node and Postgresql required to run the application locally.

LOCAL INSTALLATION INSTRUCTIONS:
* clone this repository to your local machine
* in the repo run npm install
* createdb menu_db
* node config/migrate.js
* nodemon

App will listen on port 3000.
