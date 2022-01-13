const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRoute = require('./routes/admin.route')
const shopRoute = require('./routes/shop.route')

const app = express()

app.set('view engine', 'ejs')

/* .use() >>> fires for every single request coming on but only if the request reach this point in the code 
    .use() >>> the order of these does matter
 */
app.use(bodyParser.urlencoded({extended:false}))  //Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

// app.use('/public', express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))  // to make folder named public public to the browser

app.use('/admin',adminRoute)
app.use(shopRoute)


const PORT = process.env.PORT || 8000
app.listen(PORT)