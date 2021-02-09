# JeopardyNode
To run this Node file it will be necessary to:
1) install node on the machine
2) use npm to install "express" - a minimal and flexible web application framework that provides
features for web and mobile applications
## Run the application (with administrator privilege from command prompt)
node jeopardy-db.js
## See the results (in the browser)
http://localhost:5000/(Database-Table-Name)/<br/>
where (Database-Table-Name) can be Categories, Questions, Answers
and the port number being used is 5000 (if necessary, the port number
can be modified in the ***jeopardy-db.js*** file.)
## SQL Server - Jeopardy - Database setup
The SQL Server must have TCP/IP network protocol installed.  And the default port number of 1433 is
used to connect to the database (if necessary, the port number can be modified in the ***jeopardy-db.js***
file.)  The user name and password for SQL
Authentication must be setup through the SQL server and updated in the logindata.js file.
This application looks for SQL Server database with ***Jeopardy*** name
containing table information as follows:
### Categories (table with the following entries)
Id - unique category id number<br/>
Name - the category name
### Questions (table with the following entries)
Id - unique question id number<br/>
PointValue - the point value of the question (100, 200,...)<br/>
CategoryId - the id number of the category this question corresponds to<br/>
Question - the Jeopardy question to be solved
### Answers (table with the following entries)
Id - unique answer id number<br/>
QuestionId - the id number of the question this answer corresponds to<br/>
Answer - a possible answer to the Jeopardy question to be solved<br/>
CorrectAnswer - a boolean with values of True/False indicatind if this answer is the correct one
