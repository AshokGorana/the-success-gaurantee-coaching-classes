const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');


app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("HomePage");
});

app.get("/TodoPage", (req, res) => {
    res.render("TodoPage");
});

// app.post("/TodoPage", async (req, res) => {
//     let {todo} = req.body;
//     let createuser = await userModel.create({
//         todo
//     });
//     res.render(createuser);
// });

app.listen(3000);


