var express = require('express');
var router = express.Router();
var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next)  {
  models.equipo.findAll().then(equipos=>{
    res.status(200).jsonp(equipos);

  })


});

router.get('/:id', function(req, res, next){
  let id = req.params.id;
  models.equipo.findOne({
      where: {
          id_equipo: id
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
//POST
router.post('/', function(req, res, next)  {
  let equipo = req.body;
  models.equipo.create(equipo).then(equipos=>{
    res.status(200).jsonp({respuesta: equipo});

  })
  
})
//DELETE
router.delete('/:id', function(req, res, next){
  let id = req.params.id;
  models.equipo.destroy({
      where: {
          id_equipo: id
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