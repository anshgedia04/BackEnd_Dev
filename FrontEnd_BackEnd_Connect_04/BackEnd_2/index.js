const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.listen(4000 , () =>  {
    console.log('Server is running on port 4000');
})
const DbConnect = require('./config/database');
DbConnect();

const routes = require('./Router/Emp_Router');
app.use('/api/v1' , routes);

app.get('/', (req, res) => {
    res.send('get run sucessfully');
    console.log('get run sucessfully');
})