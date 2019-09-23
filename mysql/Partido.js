"use strict";

module.exports = function(sequelize, DataTypes) {
  var partidos = sequelize.define("partido", {
    id_partido: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    local:{
        type : DataTypes.INTEGER
    },
    visitante:{
        type : DataTypes.INTEGER
    },
    goles_local:{
       type : DataTypes.INTEGER
    },
    goles_visitante:{
        type : DataTypes.INTEGER
    },
    faltas_realizadas:{
      type : DataTypes.INTEGER
    },
    arbitro:{
    type : DataTypes.STRING
    },
    tarjetas_amarillas:{
    type : DataTypes.INTEGER
    },
    tarjetas_rojas:{
   type : DataTypes.INTEGER
    },
    fecha:{
    type : DataTypes.DATE
    },
    horarios:{
    type : DataTypes.DATE
    },
    vot_local:{
    type : DataTypes.INTEGER
    },
    vot_visitante:{
      type : DataTypes.INTEGER
      },
    ganador:{
    type : DataTypes.INTEGER
      },
    posicion:{
    type : DataTypes.STRING
      },
      createdAt : {
        type : DataTypes.DATE,
        field: "created_at"
      },
      updatedAt : {
        type : DataTypes.DATE,
        field: "updated_at"
      }
      
 }, { freezeTableName: true,
  tableName: 'partidos'});
  



//Tarjeta.removeAttribute('id');
  return partidos;
};
