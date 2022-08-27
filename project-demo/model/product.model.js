const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    productName:{
        type : String,
        required:true
    },
    productImage:{
        type: String,
        required:true
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

module.exports = mongoose.model("product",productSchema);