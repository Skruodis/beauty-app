const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri =
  "mongodb+srv://test:admin1234@grozio-salonas.dwfl18r.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const database = client.db("test");

app.post("/reservation", async (req, res) => {
  try {
    const reservations = database.collection("reservations");
    await reservations.insertOne(req.body);
    res.sendStatus(200);
  } catch (err) {
    res.status(401).send(err);
  }
});

app.put("/reservation/:id", async (req, res) => {
  try {
    const reservations = database.collection("reservations");
    const result = await reservations.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(401).send(err);
  }
});

app.delete("/reservation/:id", async (req, res) => {
  try {
    const reservations = database.collection("reservations");
    await reservations.deleteOne({ _id: new ObjectId(req.params.id) });
    res.sendStatus(200);
  } catch (err) {
    res.status(401).send(err);
  }
});

app.get("/dashboard/reservations", async (req, res) => {
  try {
    const reservations = database.collection("reservations");
    const data = await reservations.find().toArray();
    res.json(data);
  } catch (err) {
    res.status(401).send(err);
  }
});

app.listen(1337, () => console.log("Express app is up!"));
