# Osono

[Osono](https://osono.herokuapp.com) is a web application for project management
inspired by Asana. Osono allows users to create teams, projects and
tasks, allowing for users and organizations to have centralized project
management and increased productivity.

Osono is personal project by Porfirio Matias.

![Wireframe Instructions](https://github.com/SSJ6Porfy/Project_Osono/blob/master/docs/OsonoSignup.png)

## Features

* Users can create accounts with secure authentication
* Users can create tasks with titles and descriptions and label them
complete or incomplete.
* Create Teams.  
* Create Projects and add project specifc tasks.
* Search for Teams to join
* Users have a profile to manage their own information.

![Wireframe Instructions](https://github.com/SSJ6Porfy/Project_Osono/blob/master/docs/Osonoview.png)
![Wireframe Instructions](https://github.com/SSJ6Porfy/Project_Osono/blob/master/docs/Osonoview%20Task%20Edit.png)
![Wireframe Instructions](https://github.com/SSJ6Porfy/Project_Osono/blob/master/docs/Osonoview%20Create%20Team.png)

## Product Design

Osono was designed and built in 10 days with the goal of replicating
the core functionalities of Asana.

[Component Hierarchy](https://github.com/SSJ6Porfy/Project_Osono/wiki/Component-Hierarchy)

[Database Schema](https://github.com/SSJ6Porfy/Project_Osono/wiki/Database-Schema)


## Technology

### Backend

* Database
  * PostgreSQL, an object-relational database management system (ORDBMS) was used
for the database.
  * Elasticsearch, a document data store for fast full text search
* Heroku
  * The Application is hosted on Heroku
* Dependencies
  * BCrypt for secure auth

### Frontend

* React/Redux
  * Used react components with Redux predictable state container.

* npm is used manage all frontend dependencies.
  * babel-core
  * babel-loader
  * babel-preset-es2015
  * babel-preset-react
  * lodash
  * react
  * react-dom
  * react-modal
  * react-redux
  * react-router-dom
  * redux
  * redux-logger
  * redux-thunk
  * webpack

## ToDos

* Implement Elasticsearch for completed tasks
* Filter completed tasks from task index
