const mongoose=require("mongoose")
// Define sub-schema for savings
const savingsSchema = new mongoose.Schema({
    atm: { type: Boolean, default: false },
    checkbook: { type: Boolean, default: false },
    onlinebanking: { type: Boolean, default: false }
  });
  
  // Define sub-schema for documents
  const documentsSchema = new mongoose.Schema({
    photo: { type: String, default: null },
    idproof: { type: String, default: null }
  });
  
  // Define main schema
  const stateSchema = new mongoose.Schema({
    holdername: { type: String, required: true },
    accountnumber: { type: String, required: true },
    dob: { type: String, required: true }, // Assuming DOB is stored as a string
    identificationType: { type: String, required: true },
    gender: { type: String, required: true },
    savings: { type: savingsSchema, required: true },
    documents: { type: documentsSchema, required: true }
  });
  
  const accountDetails = mongoose.model('State', stateSchema);
  
  module.exports = accountDetails;