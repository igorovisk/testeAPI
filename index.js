const cookieParser = require("cookie-parser")
const express = require("express")
const jwt = require("jsonwebtoken")
const controllers = require("./controllers")
const app = express()
const port = 5000
const session = require("express-session")
const cors = require("cors")

app.get("/", (req, res) => res.send("Server Iniciado..."))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/usuarios", controllers.usuarios)
app.use("/habilidades", controllers.habilidades)
app.use("/autenticacao", controllers.autenticacao)

//PERMITINDO CORS
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["get", "post", "put", "delete"],
        credentials: true,
    })
)

//USANDO COOKIE PARSER
app.use(cookieParser())
app.listen(port, () => console.log("Servidor rodando na porta 5000..."))

app.use(
    session({
        key: "login",
        secret: "teste",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
)

// module.exports = jwt
