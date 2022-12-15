const bookmarks=require("./bookmark.module");
const {Router}=require("express");

const bookmarkRoute=Router();

bookmarkRoute.get("/",async(req,res)=>{
    try{
        let bookmarkData=await bookmarks.find();
        res.send(bookmarkData)
    }catch(e){
        res.status(500).send(e.message);
    }
})

bookmarkRoute.post("/",async(req,res)=>{
    try{
        console.log(req.body);
        let bookmark=await bookmarks.create(req.body);
        res.send(`${bookmark} - data bookmarked successfully`)
    }catch(e){
        res.status(500).send(e.message);
    }
})

module.exports=bookmarkRoute;