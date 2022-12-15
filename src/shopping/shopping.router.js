const ShoppingDetails=require("./shopping.module");

const {Router}=require("express");

const shoppingRoute=Router();

shoppingRoute.post("/",async(req,res)=>{
    try{
        console.log(req.body);
        let shopping=await ShoppingDetails.create(req.body);
        res.send(`${shopping} - data inserted successfullt`)
    }catch(e){
        res.status(500).send(e.message);
    }
})

shoppingRoute.get("/getDetails",async(req,res)=>{
    try{
        let shoppingData=await ShoppingDetails.find();
        res.send(shoppingData)
    }catch(e){
        res.status(500).send(e.message);
    }
})

shoppingRoute.delete("/:id",async(req,res)=>{
    try{
        let shoppingData=await ShoppingDetails.findByIdAndDelete(req.params.id);
        res.send("data deleted successfully")
    }catch(e){
        res.status(500).send(e.message);
    }
})



module.exports=shoppingRoute;