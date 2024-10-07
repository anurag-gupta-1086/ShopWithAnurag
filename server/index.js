const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;


app.use(
	cors({
	  origin: 'http://localhost:3000',
	  credentials: true
	})
);
//   app.options(
// 	"*",
// 	cors({
// 	  origin: 'http://localhost:3000',
// 	  credentials: true
// 	})
//   );

//middleware to parse json request body
app.use(express.json());
app.use(cookieParser());


const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/cart', cartRoutes);

//start the server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

//connect to the db
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=> {
    res.send('<h1>This is hp</h1>')
})