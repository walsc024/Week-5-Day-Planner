# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use a library like [Moment.js](https://momentjs.com/) to work with dates and times.


* Firstly i had to create the time blocks in the html file to show the different hours during the working day. This inculded adding columns and row settings with also adding a text area for the data to be entered and also a save button. As well as this classes and id's were added.

* Next in the script.js file i started with document.ready function to start the file after the html had finished loading.

* To add the current date to the header i used a variable of current day and then used the moment.js function to add the specific date and in what format

* The next part added was the save button for the task that was added to be saved to local storage 

* The final part to complete was to add in a function to get each hours task from local storage so it could be continued to be displayed in the text area 

* You can view the code working here https://walsc024.github.io/Week-5-Day-Planner/ aslo see attatched screen shots for code in action. 