var express = require('express');
const cors = require('cors');

var app = express();
//cau hinh body parser
// app.use(express.json());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors({
    credentials: true,
    origin: [
        'http://localhost:3000', //link frontend duoc phep truy cap data
        'http://localhost:3001', 
    ]
}))

//cac router 
require('./src/routers/home.router')(app);
require('./src/routers/user.router')(app);
require('./src/routers/phim.router')(app);
require('./src/routers/thongBao.router')(app);

app.listen(3000, function() {
    console.log("Server listening on http://localhost:3000")
})
