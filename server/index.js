const express=require('express')
const cors=require('cors')
const path=require('path')
const connection = require('./config/mongo')
const router = require('./router/testrouter')
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Images')
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

app.post('/upload', upload.array('image'), (req, res) => {
  try {
    const files = req.files;
    if (Array.isArray(files) && files.length > 0) {
      return res.json({ success: true, files });
    } else {
      throw new Error("File upload unsuccessful");
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.use('/',router)
const port=4000
app.listen(port,()=>console.log(`${port}`))