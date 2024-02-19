const express=require('express')
const cors=require('cors')
const path=require('path')
const connection = require('./config/mongo')
const router = require('./router/testrouter')
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '\Images')
    },
    filename: function (req, file, cb) {
        console.log(file);
      cb(null, Date.now()+path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })
 
connection()
const app=express()
app.use(express.json())
app.use(cors())
app.get("/upload",(req,res)=>{
    res.render("upload")
  })
app.post('/upload', upload.single('image'),(req, res)=> {
    res.send('Uploaded successfully')
     // req.file is the `avatar` file
     // req.body will hold the text fields, if there were any
   })
app.use('/',router)
const port=6000
app.listen(port,()=>console.log(`${port}`))