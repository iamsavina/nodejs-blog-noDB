# nodejs-blog-noDB
This repository includes backend of a blog site with database created from scratch

#installation
> copy repository using 'Git clone https://github.com/savi-cloud/nodejs-blog-noDB.git' code
> Install necessary node js modules -> npm install
  Used modules are;
     express
     express-sessions

#structure
Index.js is the server file

/login -> user login
  login process controlled in user-controller.js -> loginUser() function
 
/login/register -> register 
  register process controlled in user-controller.js -> registerUser() function
  
 
When logged
===========
/blog
  > checks login session
  > shows the blog