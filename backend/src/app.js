require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authroute = require('./routes/auth.routes');
const loginroute = require('./routes/loginpage.route');

const app = express();

const multer = require('multer');
const uploadFile = require('./services/storage.service');

const postemodel = require('./models/post.model');
const usermodel = require('./models/user.model');

app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use('/auth', authroute);
app.use('/login', loginroute);

const upload = multer({
    storage: multer.memoryStorage()
});

app.post('/create-post', upload.single("image"), async (req, res) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "unauthorized"
        });
    }

    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {

        if (err) {
            return res.status(401).json({
                message: "invalid token"
            });
        }

        const result = await uploadFile(req.file.buffer);

        const post = await postemodel.create({
            image: result.url,
            caption: req.body.caption
        });

        console.log("post created successfully");

        res.status(200).json({
            message: "post created successsfully",
            post: post
        });

    });

});

app.get("/posts", async (req, res) => {

    const post = await postemodel.find();

    res.status(200).json({
        message: "post fetched successfully",
        post: post
    });

    console.log(post);

});

app.get("/login", (req, res) => {
    res.send("login page");
});

module.exports = app;