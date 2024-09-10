const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

const datafilepath = "data.json";

app.use(express.json());

app.use(cors());

//  post to save the data to the file

app.post("/api/blog/create", async (req, res) => {
    try {
        const existingdata = JSON.parse(fs.readFileSync(datafilepath, "UTF-8"));
        const newblog = {
            id: Date.now(),
            ...req.body,
        };

        existingdata.unshift(newblog);

        fs.writeFileSync(datafilepath, JSON.stringify(existingdata, null, 2));
        return res.status(200).send({ msg: "data saved", data: newblog });
    } catch (err) {
        return res.send({ error: err.message });
    }
});

// to read all the data from the server

app.get("/api/blog/getAll", async (req, res) => {
    try {
        const existingdata = JSON.parse(fs.readFileSync(datafilepath, "UTF-8"));
        console.log(existingdata);

        return res.status(200).send({ success: true, data: existingdata });
    } catch (err) {
        return res.send({ error: err.message });
    }
});


app.listen(4000, () => console.log("listening to the port 4000"));

