const mongoose = require("mongoose")

const connectToDb = async () => {
    // todo improve this
// mongoose.connect('mongodb://127.0.0.1:27017/test')
mongoose.connect(process.env.MONGO_URI)
.then((conn) => {
    console.log(`conneted to DB: ${conn.Connection.host}`);
})
.catch((err) =>{
    console.log(err.message);
    process.exit(1)
})
}


module.exports = connectToDb;