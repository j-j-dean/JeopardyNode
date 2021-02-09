/**********************************************************
* Set the user_name to the user Login required
* for SQL Server Authentication
**********************************************************/
user_name = 'Jeff';

/**********************************************************
* Set the password to the corresponding password
* required for SQL Server Authentication
**********************************************************/
password ='2b1f5dea9';

/**********************************************************
* Export these variables for use in modules requiring them
**********************************************************/
module.exports.user_name =  user_name;
module.exports.password = password;