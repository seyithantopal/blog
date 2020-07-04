const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

// Routers
const authRouter = require('./routes/api/auth');
const postRouter = require('./routes/api/post');
const categoryRouter = require('./routes/api/category');
const userRouter = require('./routes/api/user');

// Routes
app.use('/api/auth', authRouter);
app.use('/api/post', postRouter);
app.use('/api/category', categoryRouter);
app.use('/api/user', userRouter);

app.get('/hello', (req, res) => {
	res.send('hello');
});

app.listen(port, () => console.log(`Server is running on ${port}`));
