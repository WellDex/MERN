const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.b1td4.mongodb.net/todolist?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const PORT = process.env.PORT || 5000;

app.use(express.json({extended: true}));

app.use('/api/auth', require('./routh/authRoutes'));
app.use('/api/todo', require('./routh/todoRoutes'));
app.use('/api/user', require('./routh/userRoutes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, () =>
  console.log(`Server has been started on port ${PORT}...`)
);
