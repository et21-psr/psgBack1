var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usuarioRouter = require('./routes/usuario');
var partidoRouter = require('./routes/partido');
var equipoRouter = require('./routes/equipo');
var jugadorRouter = require('./routes/jugador');
var estadisticaEquiposRouter = require('./routes/estadisticaEquipo');
var estadisticaPartidoRouter = require('./routes/estadisticaPartido');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'pagina')));

app.use('/', indexRouter);
app.use('/usuario', usuarioRouter);
app.use('/partido', partidoRouter);
app.use('/equipo', equipoRouter);
app.use('/jugador', jugadorRouter);
app.use('/estadisticaEquipo', estadisticaEquiposRouter);
app.use('/estadisticaPartido', estadisticaPartidoRouter);
module.exports = app;
