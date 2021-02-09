/**************************************************************
* Load login id and password info
*   user_name - database user name
*   password  - database user name's password
**************************************************************/
var login_data = require('./logindata.js');

/**************************************************************
* Local connection variables
*   database_name - the name of the SQL database
*   port_number   - the database connection port number
*   Note: TCP/IP must be installed as a network protocol
*     for SQL server.  The default port number is 1433.
**************************************************************/
var database_name = 'Jeopardy';
var port_number = 1433;
var config = {
  server:'localhost',  // server host
  user:user_name,      // from logindata.js
  password:password,   // from logindata.js
  database:database_name,
  port:port_number
};

/**************************************************************
* Setup the Express Framework to handle HTTP requests
**************************************************************/
var express = require('express');
var sql = require("mssql");
var app = express();

/****************************************************
* Display questions from SQL database to site
*   in response to "http://localhost:5000/Questions/"
****************************************************/
app.get('/Questions/', function(req, res) {

    sql.connect(config, function(err) { // connect to the database
        if (err) {
            console.log(err);
        } else {
            var request = new sql.Request();
            request.query('select * from Questions', function(err, data) { // Query the database
                if (err) {
                    console.log(err);
                } else {
                    html_text = "<h1>Jeopardy Questions <span>(from NodeJS)</span></h1>";
                    html_text += "<h4>&nbsp;Id&emsp;Point Value&emsp;Category Id&emsp;&emsp;&emsp;Question</h4>";
                    for (item in data['recordset']) {
                        html_text += "<h4>&nbsp;&nbsp;&nbsp;"+data['recordset'][item].Id;
                        html_text += "&emsp;&emsp;"+data['recordset'][item].PointValue;
                        html_text += "&emsp;&emsp;&emsp;&emsp;&emsp;"+data['recordset'][item].CategoryId;
                        html_text +="&emsp;&emsp;&emsp;&emsp;"+data['recordset'][item].Question;
                        html_text += "</h4>";
                    }
                    res.send(html_text);  // Send formatted HTML response to the site
                }
            });
        }
    });
});

/****************************************************
* Display answers from SQL database to site
*   in response to "http://localhost:5000/Answers/"
****************************************************/
app.get('/Answers/', function(req, res) {

    sql.connect(config, function(err) { // connect to database
        if (err) {
            console.log(err);
        } else {
            var request = new sql.Request();
            request.query('select * from Answers', function(err, data) { // Query the database
                if (err) {
                    console.log(err);
                } else {
                    html_text = "<h1>Jeopardy Answers (from NodeJS)</h1>";
                    html_text += "<h4>&nbsp;Id&emsp;Category Id&emsp;Answer</h4>";
                    for (item in data['recordset']) {
                        html_text += "<h4>&nbsp;&nbsp;&nbsp;"+data['recordset'][item].Id;
                        html_text += "&emsp;&emsp;&emsp;"+data['recordset'][item].QuestionId;
                        html_text += "&emsp;&emsp;&emsp;"+data['recordset'][item].Answer;
                        if (data['recordset'][item].CorrectAnswer) {
                            html_text += "  **correct**";
                        }
                    }
                    res.send(html_text);  // Send formatted HTML response to the site
                }
            });
        }
    });
});

/****************************************************
* Display categories from SQL database to site
*   in response to "http://localhost:5000/Categories/"
****************************************************/
app.get('/Categories/', function(req, res) {

    sql.connect(config, function(err) { // connect to database
        if (err) {
            console.log(err);
        } else {
            var request = new sql.Request();
            request.query('select * from Categories', function(err, data) { // Query the database
                if (err) {
                    console.log(err);
                } else {
                    html_text = "<h1>Jeopardy Categories (from NodeJS)</h1>";
                    html_text += "<h4>&nbsp;Id&emsp;Category Name</h4>";
                    for (item in data['recordset']) {
                        html_text += "<h4>&nbsp;&nbsp;&nbsp;"+data['recordset'][item].Id;
                        html_text += "&emsp;&emsp;&emsp;"+data['recordset'][item].Name;
                    }
                    res.send(html_text); // Send formatted HTML response to the site
                }
            });
        }
    });
});

/****************************************************
* listen for connection requests
****************************************************/
var server = app.listen(5000, function() {
  console.log("Server is running on 5000");
  console.log("*************************************************************************************");
  console.log("Make sure user ("+ user_name+ ") can access database (" + 
               database_name + ") by name and function in SQL Server");
  console.log("Make sure correct database port ("+port_number+") is configured for TCP/IP with SQL server");
  console.log("*************************************************************************************");
});

