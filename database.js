const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pakistan-cricket-team', { useNewUrlParser: true, useUnifiedTopology: true });

const teamSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
```
This project includes a beautiful frontend built with React, a simple backend built with Node.js/Express, and a MongoDB database to store team data. The frontend has a hero section, about section, team section, and a footer. The team section displays a list of team members with their names, roles, and images. The backend serves the frontend and provides a simple API to retrieve team data. The database stores team data in a MongoDB collection.