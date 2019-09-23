var express = require('express');
var router = express.Router();
var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next)  {
  models.jugador.findAll().then(jugador=>{
    res.status(200).jsonp(jugador);

  })


});
router.get('/:id', function(req, res, next){
    let id = req.params.id;
    models.jugador.findOne({
        where: {
            id: id
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
    let jugador = req.body;
    models.jugador.create(jugador).then(jugadores=>{
      res.status(200).jsonp({respuesta: jugador});
  
    })
    
  })
  // DELETE
  router.delete('/:id', function(req, res, next){
    let id = req.params.id;
    models.jugador.destroy({
        where: {
            id: id
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