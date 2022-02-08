Setup:
Start by running:

    bundle install ~ to install the gems
    rails s ~ to start the rails server
	npm install ~ this command installs a package and it’s dependencies. A .json file is downloaded and a node_modules folder should install. 
	npm start ~ this script is used to execute the defined file in it without typing its execution command.

Further Instructions:
    Open the browser and load: http://localhost:3000 to view the database
    Open another tab and load: http://localhost:4000 to view the frontend

In this app, the user is able to:
    - Login
    - Upon login, the user should be able to navigate using the NavBar to:
        - A tab that renders all of the games from the database
        - A tab that renders all of the users games only
        - A tab for a currently empty home / about me page
        - A logout button for when they are ready to logout
    - Upon login, the user should be able to view all the games they've submitted into the database
    - Edit, Update, or Delete the games that they have entered, but no one else's
    - The User is able to add a game to their list as well

    - A new user should:
        - Not be able to login, as they should receive a message stating they are not a member
        - Have the ability to log in as long as they provide a username with 6 letters or more, an age over 18, and an answer if they are a competitive player or not
        - Not be able to view any games from the database, as well as not be able to add, update, or edit any games themselves

    In this app, the developer is able to:
        - Interact with the database via Active Record by performing queries via the terminal