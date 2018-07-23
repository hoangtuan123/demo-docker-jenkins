
const express = require('express');
const app = express();

const config = {
    APP_PORT: 3200
}

app.get('/*', function(req, res){
    res.status(200).send('okeeee');
});



app.listen(config.APP_PORT, () => console.log('Webhook server is listening, port ' + config.APP_PORT));


