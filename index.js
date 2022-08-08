const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const userData = require("./data.json")


app.get("/",(req,res)=>{
res.send("hello your api is at /userapi :url")
})
app.get("/userapi",(req,res)=>{
    res.send(userData)
})

app.listen(port, "localhost", () => {
  console.log(`port listening at ${port}`);
});
