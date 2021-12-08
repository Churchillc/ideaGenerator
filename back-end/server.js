const express = require('express');
const bodyParser = require("body-parser");
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});

const itemSchema = new mongoose.Schema({
  part1: String,
  part2: String,
  part3: String,
});

const savedSchema = new mongoose.Schema({
  savedString: String,
});

const Item = mongoose.model('Item', itemSchema);
const SavedString = mongoose.model('SavedString', savedSchema);

app.post('/api/photos', upload.single('photo'), async (req, res) => {
  console.log("upload photo");
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

app.post('/api/items', async (req, res) => {
  console.log("in upload function");
  const item = new Item({
    part1: req.body.part1,
    //path: req.body.path,
    part2: req.body.part2,
    part3: req.body.part3,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/saved', async (req, res) => {
  console.log("in upload SAVED function" + req.body.savedString);
  const saved = new SavedString({
    savedString: req.body.savedString,
  });
  try {
    await saved.save();
    res.send(saved);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/saved', async (req, res) => {
  console.log("in saved get");
  try {
    let ideas = await SavedString.find();
    res.send(ideas);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) =>{
  console.log("in the delete function");
  try{
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/saved/:id', async (req, res) =>{
  console.log("in the delete SAVED function");
  try{
    await SavedString.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/items/:id', async (req, res) =>{
  console.log("in the put function");
  try{
    var foundItem = await Item.findOne({
      _id: req.params.id
    });
    foundItem.part1 = req.body.part1;
    foundItem.part2 = req.body.part2;
    foundItem.part3 = req.body.part3;
    foundItem.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3000, () => console.log('Server listening on port 3000!'));
