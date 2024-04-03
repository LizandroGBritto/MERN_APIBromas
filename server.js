const {PORT} = require("./config/settings");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./config/mongoose.config");

const JokesRouter = require("./routes/jokes.routes");
app.use("/api/jokes", JokesRouter);

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); } );