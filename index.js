const express = require("express");
const {readFile, readFileSync} = require("fs");

const app = express();
app.use('/static', express.static('static'))

app.get("/", (request, response) => {

    console.log("requesting");

    readFile("index.html", "utf8", (err, html) => {

        if (err) {
            response.status(500).send(err);
        }
        response.send(html);

    });
});

app.get("/upload", (request, response) => {
    readFile("upload.html", "utf8", (err, html) => {

        if (err) {
            response.status(500).send(err);
        }
        response.send(html);

    });
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening to port 3000");
})
