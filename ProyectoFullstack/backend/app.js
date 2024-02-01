var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

require("dotenv").config();
var session = require("express-session");
var fileUpload = require("express-fileupload");
var cors = require('cors');

//ROUTES
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/admin/login");
var adminComunidadRouter = require("./routes/admin/comunidad");
var apiRouter = require("./routes/api")

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "esteesunstringdemasde20caracteres",
    resave: false,
    saveUninitialized: true,
  })
);

//MIDDLEWARE
const secured = (req, res, next) => {
  try {
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.error(error);
    res.redirect("/admin/login");
  }
};

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
})) //Importante que el código esté acá para que funcione, antes de recibir '/comunidad'


app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/admin/login", loginRouter);
app.use("/admin/comunidad", secured, adminComunidadRouter);
app.use("/api", cors(), apiRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
