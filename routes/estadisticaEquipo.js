var express = require('express');
var router = express.Router();
var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next)  {
  models.estadisticaEquipo.findAll().then(estadisticaEquipos=>{
   res.status(200).jsonp(estadisticaEquipos);

})


});
router.get('/:id', function(req, res, next){
  let id = req.params.id;
  models.estadisticaEquipo.findOne({
      where: {
        id_estadistica_equipo: id
      }
  }).then(result => {
      console.log(result);
      if(result == null){
          res.status(200).jsonp({respuesta:"ERROR. Estadistica no disponible"});
      }
      else{
          res.status(200).jsonp({respuesta:result});
      }
  })
});
// POST
router.post('/', function(req, res, next)  {
  let estadisticaEquipo = req.body;
  models.estadisticaEquipo.create(estadisticaEquipo).then(estadisticaEquipos=>{
    res.status(200).jsonp({respuesta: estadisticaEquipo});

  })
  
})
// DELETE
router.delete('/:id', function(req, res, next){
  let id = req.params.id;
  models.estadisticaEquipo.destroy({
      where: {
        id_estadistica_equipo: id
      }
  }).then(result => {
      console.log(result);
      if(result == null){
          res.status(200).jsonp({respuesta:"ERROR. No existe"});
      }
      else{
          res.status(200).jsonp({respuesta:result});
      }
  })
});

   
module.exports = router;