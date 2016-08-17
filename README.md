![cf](https://i.imgur.com/7v5ASc8.png) lab 20 testing controllers
======

# To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Build Tool Instructions
* create a package.json that lists all your developer dependencies
 * create a `watch` npm script for running `webpack-dev-server --inline --hot`
 * create a `lint` npm script to lint your javscript code using eslint
* create a wepack config file
 * must output files into a build directy
 * must have a sass loader config, that uses the `extract-text-webpack-plugin`
* create a karma config file
* include a gitignore
* include an eslintrc
* inclunde a README.md
 * write instructions on running your tests
 * write instructions on running you linter
 * write a paragraph about what you did

# Directions
* Create these directories to organize your code: 
 * app/controller
 * app/html
 * app/scss
 * app/scss/vendor
* create a **_theme.scss** partial 
 * add three color variables
* create a **base.scss** file 
 * import normalize
 * import \_theme
 * write some styles that use the color variables defined in \_theme
* create a **entry.js**
 * require your **index.html** and force webpack to use the `file-loader`
 * require your **base.scss**

# Client Functionality
For this assignment you'll be creating a text based adventure game.
* This game should have at least two rooms that the player can move between. 
* When entering one of the rooms the player should encounter an object they can interact with
 * interation suggestions: attack, pickup, read, drink/eat
* Every action should result in a log message appending to the games history 
 * The history should be displayed on the page 
* Your page should have a form that controls the players actions
* Make sure to create each of your different commands or actions as functions on your controller.

# Group Work
* Feel free to work with others to create a plan for your item interaction.
* However, you must create and turn in your own game.

# Test
* Unit test 4 Controller Methods that chage the state of the scope

# Test
* write a test for both the createMonster and createPlayer functions

# Bonus
* *1pt* use ng-repeat to populate a select menu
