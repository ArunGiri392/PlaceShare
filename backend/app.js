const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes); 
app.use("/api/users", usersRoutes);

//handling all requests that comes after routes.
// if previous middleware did not send response.
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured" });
});

mongoose
  .connect('mongodb+srv://arungiri:AGa58577@cluster0.kigh3hu.mongodb.net/places?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
