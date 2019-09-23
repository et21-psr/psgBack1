var express = require('express');
var router = express.Router();
var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next)  {
  models.estadisticaPartido.findAll().then(estadisticaPartido=>{
    res.status(200).jsonp(estadisticaPartido);

  })


});

router.get('/:id', function(req, res, next){
  let id = req.params.id;
  models.estadisticaPartido.findOne({
      where: {
        id_partido: id
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
  let estadisticaPartido = req.body;
  models.estadisticaPartido.create(estadisticaPartido).then(estadisticaPartidos=>{
    res.status(200).jsonp({respuesta: estadisticaPartido});

  })
  
})
// DELETE
router.delete('/:id', function(req, res, next){
  let id_partido = req.params.id;
  models.estadisticaPartido.destroy({
      where: {
          id_partido: id
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