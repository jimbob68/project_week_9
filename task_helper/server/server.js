const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const createRouter = require('./helpers/create_router.js');

const cors = require('cors');

app.use(bodyParser.json());
app.use(cors())

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db =  client.db('task_helper');
  const tasksCollection = db.collection('tasks');
  const tasksRouter = createRouter(tasksCollection);
  app.use('/api/tasks', tasksRouter);
})

.catch(console.error);


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port}`);
});
