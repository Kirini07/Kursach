const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()

const authRoute = require('./routes/common.routes/auth.routes/Auth.employee')
const adminAuthRoute = require('./routes/admin.routes/auth.routes/Auth.admin')
const ordersRoute = require('./routes/common.routes/order.routes/Orders.route')
const commonCourseRoute = require('./routes/common.routes/course.routes/Course.route')
const adminCourseRoute = require('./routes/admin.routes/courses.routes/Course.route')

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, '../', 'client', 'build')))
  
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html' ))
    })
  }

app.use(cors())
app.use(express.json({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json'}))

app.use('/auth', authRoute)
app.use('/admin/auth', adminAuthRoute)
app.use('/orders', ordersRoute)
app.use('/common/course', commonCourseRoute)

app.use('/admin/course', adminCourseRoute)


module.exports = app;