import express  from "express"; 
const app = express();
const host = '127.10.0.1'
const port = 3000;

app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.json({pesan: "halo pesan dari backend"});
});

app.post("/api/data", (req, res) => {
    const { frontend } = req.body;
    res.json({pesan: `halo ${frontend}, data diterima`});
});

app.listen(port, host, function () {
    console.log("server ready.......");
})