# Travel Blogger
---

### Overview

Travel blogger is a Full Stack web social media application that allows travelers to record trips with activites they did while at the destination and blog of thoughts about the destination.  When taking a trip to destination where other travelers have already visited, the application will make suggestions based on the activities of the travelers that have already visited the destination.  The application also keeps track of total miles travelled and countries visited by each user.

### Main Page/Create Traveler

The main page is where a traveler can create a profile.  You can go to that user's profile page by choosing them from a dropdown menu.  The main page also lists all the travelers with a profile on the site by how many miles they have travelled.  Furthermore, a list of recently taken trips by all users are listed.

### Traveler Profile Page

The traveler profile page contains the user profile, including hometown, miles traveled and countries visited.  It also  lists the most recent trips taken by the traveler with a link to view the trip in greater detail or erase the trip.  The traveler profile page is also where the traveler can log a new trip.  When the traveler creates a new trip the distance from the travelers hometown to the destination is calculated and suggestions for activities based on previous traveler's trips to that destination are listed.  The traveler can also write a quick blog on their thoughts and/or critique of the destination.

### Trip Details Page

The has three sections one for the trip overview including dates, miles traveled and who took the trip, another for the activities that were done and one for a blog of the travelers thoughts on the trip.

Link to site: https://duproject2-l-a-k-d.herokuapp.com/


### Built with

* Node.js - runtime environment
* Express.js - server framework for Node.js
* MySQL - SQL database
* Sequelize - Object relational model
* Handlebars.js - Templating language/Views
* Boostrap - styling and page layout
* JQuery - AJAX calls, event handling and change event dynamic rendering
* NodeGeocoder - NPM that returns coordinates for locations using Open Street Map

### Contributors:

- Lee Hawkins - Database, models, routing, view rendering
- Kilea Castillo - jQuery Datepicker, styling
- David Sobernheim - API calls
- Alex Heffron - Styling




