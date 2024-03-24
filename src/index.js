import express from "express";
import { lookup } from "node:dns"

const app = express();

const port = 3000;

app.use(express.json())

app.get("/api", (_req, res) => {
  res.send("Hello World!");
});

app.post("/api", (req, res) => {
    console.log(req.body);
    const { url } = req.body;

    lookup(url, (err, result) => {
        if (err) {
            console.log({err})
            return res.status(400).json({
                message: 'Invalid URL',
            })
        }

        console.log({result})
        
        res.send('Link shorted successfully')
    })
})

app.get('/l/:id', (req, res) => {
    const { id } = req.params
})

app.listen(port, () => {
    console.log("listen on port " + port);
});