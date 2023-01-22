const app = require("./app");

const dotenv = require('dotenv');
dotenv.config({path: `${__dirname}/.env`})

const { default: mongoose } = require("mongoose");
const { Meeting } = require("./models/meetings.model");
mongoose.set('strictQuery', true)

console.log(process.env.NODE_ENV)

if(process.env.DB_URL){
    let connectionUrl = process.env.DB_URL
    if(process.env.DB_HOST) connectionUrl = connectionUrl.replace(/{DB_HOST}/g, process.env.DB_HOST)
    if(process.env.DB_NAME) connectionUrl = connectionUrl.replace(/{DB_NAME}/g, process.env.DB_NAME)
    if(process.env.DB_USER) connectionUrl = connectionUrl.replace(/{DB_USER}/g, process.env.DB_USER)
    if(process.env.DB_PASSWORD) connectionUrl = connectionUrl.replace(/{DB_PASSWORD}/g, process.env.DB_PASSWORD)

    mongoose.connect(connectionUrl, {}).then((conn)=> {
        // console.log(conn.connections);
        console.log('Connected to MongoDB database')
    });
}

// const testMeeting = new Meeting({
//     name: 'test'
// })

// testMeeting.save().then((doc)=> console.log(doc)).catch(e => console.log(e))

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=> console.log(`Started application at localhost:${PORT}`))