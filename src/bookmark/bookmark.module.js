const mongoose=require("mongoose");

const bookmarkSchema=new mongoose.Schema({
    shoppingDetailsData:{type:mongoose.Schema.Types.ObjectId,ref:"shoppingDetail"}
},{
    versionKey:false,
    timestamps:true
});

const bookmarks=mongoose.model("bookmark",bookmarkSchema);

module.exports=bookmarks;