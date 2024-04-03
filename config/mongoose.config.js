const mongoose = require ('mongoose');
const db_name = "jokes";

mongoose.connect(`mongodb://localhost/${db_name}`)
    .then(() => console.log(`Connected to the ${db_name} database`))
    .catch(err => console.log(`Failed to connect to the ${db_name} database`, err));