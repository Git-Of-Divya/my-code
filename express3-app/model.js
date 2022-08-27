const { default: mongoose } = require('mongoose');
const mongooose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
   productName :{
     type : String,
     required : true
   },
   productDescription:{
     type : String,
     required : true
   },
   productPrice :{
     type: String,
     required: true,
     min:1
   }
})

module.exports = mongooose.model("product",productSchema);