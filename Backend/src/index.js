const express = require('express');
const app = express();
const cors = require('cors');
const morgan=require('morgan');

app.use(cors());
app.use(require('./routes/index'));

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});