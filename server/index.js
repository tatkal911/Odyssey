#!/bin/node

const dotenv = require('dotenv')
const app = require('./src/app')
const db = require('mongoose');

dotenv.config('./.env')
const host = process.env.HOST
const port = process.env.PORT || 3000
const addr = process.env.ADDR
const mongo_uri = process.env.MONGO_URI || 3000


	db.connect("mongodb://localhost:3000",
	 {useNewUrlParser: true, useUnifiedTopology: true },
	() => {
	  console.log('Connected to MongoDB');
	}
  );

//db.connect(mongo_uri, () => {
	//console.log('Database connected')
//})

app.listen(port, addr, err => {
	if (err) throw err
	console.log(`server listening on ${host}:${port}`)
})

