const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

// Set Port
const port = process.env.PORT || 5000;

// Set Middleware
app.use(cors());
app.use(express.json());

// Connect DB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sddmx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create API
async function run() {
    try {
        await client.connect();
        const bookCollection = client.db('inventory').collection('books');
    } finally { }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Server Running in the Front!');
});

app.listen(port, () => {
    console.log('Server Running in the Console!');
});