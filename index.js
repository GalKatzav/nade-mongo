const express = require('express');
const app = express();
const port = 5001;

app.get('/')

app.listen(port, () => {
    console.log('listen to port', port);
})