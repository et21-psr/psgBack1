var express = require('express');
var router = express.Router();
var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next)  {
  models.partido.findAll().then(partidos=>{
    res.status(200).jsonp(partidos);

  })


});
router.get('/:id', function(req, res, next){
  let id = req.params.id;
  partido.findOne({
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
  models.partido.destroy({
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

