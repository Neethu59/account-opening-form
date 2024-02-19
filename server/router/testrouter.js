const express=require('express')
const newaccount = require('../controller/createaccount')
const getallaccount = require('../controller/getallaccount')
const router=express.Router()
router.route('/createaccount').post(newaccount)
router.route('/getallaccount').get(getallaccount)
module.exports=router