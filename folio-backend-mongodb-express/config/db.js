const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`the database is working ${conn.connection.host}`)

    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}

module.exports = connectDB;