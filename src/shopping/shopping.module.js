const mongoose=require("mongoose");

const shoppingSchema=new mongoose.Schema({
    titleOfItem:{type:String},
    quantity:{type:Number},
    priority:{type:String},
    description:{type:String}
},{
    timestamps:true
});

const ShoppingDetails=mongoose.model("shoppingDetail",shoppingSchema);

module.exports=ShoppingDetails;