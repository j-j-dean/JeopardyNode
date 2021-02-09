/**********************************************************
* Set the user_name to the user Login required
* for SQL Server Authentication
**********************************************************/
user_name = 'MyUserName'; // CHANGE THIS!!!

/**********************************************************
* Set the password to the corresponding password
* required for SQL Server Authentication
**********************************************************/
password ='MyPassword'; // CHANGE THIS!!!

/**********************************************************
* Export these variables for use in modules requiring them
**********************************************************/
module.exports.user_name =  user_name;
module.exports.password = password;
