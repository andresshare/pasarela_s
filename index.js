const express = require('express')
const app = express()
const path = require('path')
const hbs =require ('express-handlebars')


//SERVER
	app.listen(3000,()=>{

	console.log('server on port',3000)

	})


//MOTOR DE PLANTILLAS
	app.set('views',path.join(__dirname,'views'))
	app.engine('.hbs',hbs({

		defaultLayout:'main',
		layoutDir:path.join(app.get('views'),'layout'),
		partialsDir:path.join(app.get('views'),'layout'),
		extname:'.hbs'


	}))
	app.set('view engine','.hbs')

// MIDDLEWARE

	app.use(express.urlencoded({extended:false}))
	app.use(express.json())

//ROUTES
	app.use(require('./routes/index.js'))

//STATIC FILES

	app.use(express.static(path.join(__dirname,'public')))
