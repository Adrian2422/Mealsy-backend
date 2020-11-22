# Mealsy Backend
It is the backend of the Mealsy application, used to communicate the application with the database.

## Main functionalities
 - providing API for users operations
 - incoming data validation
 - outcoming data engraving
 - database management


## APIs
 | method | url    | parameter | describtion        |
 |--------|--------|-----------|--------------------|
 | GET    | /users |           | get all users data |
 | GET    | /users | id        | get user by id     |
 | POST   | /users |           | post new user      |
 | PUT    | /users | id        | update user by id  |
 | DELETE | /users | id        | delete user by id  |
 | DELETE | /users |           | delete all users   |


## Technologies used:
![Node.js](https://img.shields.io/badge/Node.js-Express.js-339933?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Monoose-47A248?style=flat-square&logo=MongoDB&logoColor=white)

## Installation
The installation only requires cloning the repository, installing dependencies and starting the server.
```
git clone https://github.com/Adrian2422/Mealsy.git
npm install
npm start
```
## Screenshots
 --- in progress ---
<!-- <p float="left">
  <img src='./screenshots/first-run.jpg' width="450"/>
  <img src='.//screenshots/query-modal.jpg' width="500"/>
  <img src='.//screenshots/product-details.jpg' width="500"/>
  <img src='./screenshots/product-details.jpg' width="500"/>
  <img src='./screenshots/after-kcal-calculating.jpg' width="500"/>
  <img src='./screenshots/shopping-list.jpg' width="500"/>
</p> -->

<!-- ![First run](https://github.com/Adrian2422/meal-optimiser/blob/master/screenshots/first-run.JPG?raw=true "First run")
![Query modal](https://github.com/Adrian2422/meal-optimiser/blob/master/screenshots/query-modal.JPG?raw=true "Query modal")
![After sending the query](https://github.com/Adrian2422/meal-optimiser/blob/master/screenshots/after-query-sent.JPG?raw=true "After sending the query")
![Product details](https://github.com/Adrian2422/meal-optimiser/blob/master/screenshots/product-details.JPG?raw=true "Product details")
![After calculating the kcal need](https://github.com/Adrian2422/meal-optimiser/blob/master/screenshots/after-kcal-calculating.JPG?raw=true "After calculating the kcal need")
![Shopping list](https://github.com/Adrian2422/meal-optimiser/blob/master/screenshots/shopping-list.JPG?raw=true "Shopping list") -->

## Dependencies
 - express
 - mongodb
 - mongoose
 - pug
 - validator
 - body-parser
 - bcrypt
 - mongo-cursor-paginator

## Live
 --- in progress ---

## License
 Mealsy is open source software licensed as MIT