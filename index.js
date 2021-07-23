const express = require('express')
const app = express();

//-------------------------------------------usando ejs como engine
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get('/',(req, res)=>{
    res.render("index");
})



app.listen(8080,()=>{
    console.log("app rodando");
})



