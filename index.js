const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const db = require('./models/index')
const express = require('express')
let { Op } = require("sequelize");
const csv = require('fast-csv')
const app = express()
let router = express.Router()
const fs = require('fs')
const { parse } = require('json2csv')
const AdminBroSequelize = require('@admin-bro/sequelize')
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const multer = require('multer')
const path = require('path')

let {User,sequelize} = require('./models/index')


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));



AdminBro.registerAdapter(AdminBroSequelize)



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './tmp/upload/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+".jpg")
  },
})
const upload = multer({ storage: storage })

const adminBro = new AdminBro({
  database:[db],
  resources: [{
    resource: User,
    options: {
      actions: {
        upload: {
          actionType: 'resource',
          icon: 'View',
          component:true,
         
          handler: async (request, response, context) => {
            const { record, currentAdmin } = context;
            recordIds = request.params.recordId;         
          return {
            record: record.toJSON(currentAdmin),
          };
          },
          component: AdminBro.bundle('./frontend/CustomComponent'),
        }
      }
    }
  }]
});

const ADMIN =  {
  email:"admin@test.com",
  password:'testadmin'
}


app.post  ('/tmp/upload/', upload.single('image'), (req, res) => {
  console.log('Received a file upload request:', req.file)
  try {
    console.log('File uploaded successfully:', req.file.path)
    res.status(200).send({ message: 'File uploaded successfully' })
  } catch (error) {
    console.error('Error while uploading file:', error)
    res.status(500).send({ error: error.message })
  }
})

app.use(express.static(path.join(__dirname, 'tmp/upload'), {
  setHeaders: (res, path) => {
  res.set('Content-Type', 'image/png')
  }
  }))
  
  

router = AdminBroExpress.buildRouter(adminBro)
app.use('/images', express.static(path.join(__dirname, 'tmp/upload')))
app.use(adminBro.options.rootPath, router)
app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
