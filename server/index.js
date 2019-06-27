const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
const connection = require('../db/db.js')
const bodyparser = require('body-parser')

app.use(cors())
app.use(bodyparser.json())

app.post('/', function(req, res) {
  connection.query(`INSERT INTO ACCOUNT (name, email, password, address1,
  address2, city, state, shippingZIP, phonenumber, creditcard, expirationdate, cvv, billingZIP)
  VALUES ('${req.body.name}','${req.body.email}','${req.body.password}','${req.body.address1}',
  '${req.body.address2}','${req.body.city}','${req.body.state}','${req.body.shippingZIP}','${req.body.phonenumber}',
  '${req.body.creditcard}','${req.body.expirationdate}','${req.body.cvv}','${req.body.billingZIP}')`, 
  (err)=>{
    if (err) {
      console.log(err)
    return (res.sendStatus(500))
    }
    console.log('post request worked')
    res.send()
  })
  
})

app.listen(port, ()=>{
  console.log(`Server is listening on port: ${port}`)
})