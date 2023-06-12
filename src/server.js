const express = require('express')

/* Configuracion para el WEB SERVER */
const path = require('path');


// Para la plantilla
const { engine }  = require('express-handlebars')


// Inicializacion 
const app = express()

// Configuraciones
app.set('port', process.env.port || 3000)

app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))
app.set('view engine','.hbs')

//Middlewares
// Procesa informacion de 
// express.json para la prueba
app.use(express.urlencoded({extended:false}))


//Rutas
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/',(req,res)=>{
    res.render('login')
})

app.use(require('./routers/index.routes'))

// Archivos estaticos
app.use(express.static(path.join(__dirname,'public')))


module.exports = app