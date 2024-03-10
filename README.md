Steps to run the system:

1. Clone the project
2. Once finished and project is opened, type cd client > npm install. Then, type cs server > npm install.
3. Once finished installing, in client, type npm run dev. In server, type npm start.
4. When both are running, the web is ready to be tested.


Steps to test in POSTMAN:

1. While server is running, choose POST method and type this url: '[http://](http://localhost:3001/api/submit-issue)http://localhost:3001/issue/create-issue'
2. In body, choose raw and paste this sample data to get successful response.
   {
     "name": "Ahmad bin Abu",
     "email": "ahmad99@gmail.com",
     "selectedCategory": "Course registration",
     "selectedSubCategory": "Website problem",
     "description": "I cannot access the website"
   }
