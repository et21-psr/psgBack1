var express = require('express');
var router = express.Router();
var models = require("../mysql");
/* GET users listing. */
router.get('/', function(req, res, next)  {
  models.usuario.findAll().then(usuarios=>{
    res.status(200).jsonp(usuarios);

  })


});

router.get('/:id', function(req, res, next){
  let id = req.params.id;
  models.usuario.findOne({
      where: {
          id_usuario: id
      }
  }).then(result => {
      console.log(result);
      if(result == null){
          res.status(200).jsonp({respuesta:"ERROR. Usuario no encontrado"});
      }
      else{
          res.status(200).jsonp({respuesta:result});
      }
  })
});
// POST
router.post('/', function(req, res, next)  {
  let partido = req.body;
  models.partido.create(partido).then(partidos=>{
    res.status(200).jsonp({respuesta: partido});

  })
  
})
// DELETE
router.delete('/:id', function(req, res, next){
  let id = req.params.id;
  models.usuario.destroy({
      where: {
          id_usuario: id
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

