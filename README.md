# Hertz - Technical Assessment

This is a simple API built for Hertz technical assessment.


## Setup

-  **Clone** this repository

- Run **npm install** to install all necessary dependencies

- Create an **.env** that holds your DB url

- Run **npm start**. It should default to localhost:4000



## Technologies Used

-  **Express** is the Node framework used

-  **Knex** Knex is a SQL query builder, read more [here](http://knexjs.org)
-   **Heroku** Heroku was used to host the API
- **ElephantSQL** was used to provision a database, read more [here](https://www.elephantsql.com)


  

## Routes


| Description |Route | Method |

|----------------|-------------------------------|-----------------------------|

|Retrieves all submitted users| `/api/users` |**GET** |

|Returns `{userRegistered: true/false}` | `/api/users/:userId` |**GET** |

|Creates a new user, expects payload of `{userId: 12345}` | `/api/users/:userId` |**POST** |


## Problems/solutions encoutered
The project was very straightforward, had the main logic written within a few hours. The only problem I encountered was that the package [pg](https://node-postgres.com) had been recently updated to version 8.0.0, which brought along a slew of problems when trying to provision a DB from Heroku. Spent a few hours trying to make Heroku's DB work and then decided to just use [ElephantSQL](https://www.elephantsql.com) which was seamless.