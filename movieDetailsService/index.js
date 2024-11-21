const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path")

const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const ratingRoute = require("./routes/ratings");

dotenv.config();
const app = express();
const PORT = 8800;
app.use(express.static(path.join(__dirname, 'public')));
// const allowedOrigins = [
//   'http://localhost:3000',
//   'http://localhost:4000',
//   'https://movieclient.netlify.app'
// ];

// app.use(cors({
//     origin: allowedOrigins
//   }));
app.use(cors());
mongoose.connect(process.env.MONGO_URL , {
    
}).then(() => console.log("DB Connection Succesfull")).catch((err) => console.log(err))

app.use(express.json());

app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/ratings", ratingRoute);

app.listen(PORT, () => {
    console.log("Backend server is running!");
});