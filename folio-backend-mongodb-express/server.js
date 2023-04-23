const express = require("express");
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const blogsRoutes = require('./routes/blogsRoutes');
const usersRoutes = require('./routes/usersRoutes');


app.use('/api/blogs', blogsRoutes)
app.use('/api/users', usersRoutes)

  
app.listen(port, () => {
    console.log('Server started on port 5000');
  });

