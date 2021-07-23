const express = require('express')
const app = express();

//-------------------------------------------usando ejs como engine
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get('/',(req, res)=>{
    var produtos = [
        {nome: "doritos", preco: 3.14},
        {nome: "coca", preco: 5.19},
        {nome: "leit", preco: 2.99}
    ]


    var nome = "Jeferson"
    var lang = "Node JS"
    var flag = true
    res.render("index",{
        nome : nome,
        lang : lang,
        isncritos : 8000,        
        flag: flag,
        count: 0,
        produtos: produtos
    });
})

app.get('/perfil',(req, res)=>{
    res.render("principal/perfil");
})

app.listen(8080,()=>{
    console.log("app rodando");
})

function mostrarMsg(){
    flag = !flag
}



