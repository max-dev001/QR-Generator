const qr = require('qrcode');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', async(req, res)=>{
    qr.toDataURL(req.body.string, (err, code)=>{
        if(err) console.log("error");
        res.json({image: code});
    })
})
app.listen(5000);
