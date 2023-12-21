const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000
const fs = require("fs")

app.set("view engine", "ejs");
app.use("/static", express.static("static"));
app.use(express.json());


app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

fs.readdir("./static/animations",(err,files)=>{
    if(err) throw err

    let animationNames = files.map(item=>{
        return item.split(".")[0]
    })
    animationNames.forEach(item=>{
        app.get(`/learning/${item}`,(req,res)=>{
            res.render(item)
        })
    })

})

app.listen(PORT,()=>{
    console.log("Server Started on port " + PORT);
})