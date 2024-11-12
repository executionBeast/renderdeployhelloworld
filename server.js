import express from "express";
import path from "path";
import url from "url";

const PORT = process.env.PORT || 4000;
const app = express();

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log("filename pathname",__filename, __dirname)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
    res.render("index")
})


app.listen(PORT,()=>{
    console.log(`I am on http://localhost:${PORT}`)
})