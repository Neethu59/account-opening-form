const accountDetails = require("./userschema")
const getallaccount=async(req,res)=>{
    const getalluser=await  accountDetails.find()
    res.json(getalluser)
}
module.exports=getallaccount