"use strict";

module.exports = function(sequelize, DataTypes) {
  var estadistica_partido = sequelize.define("estadisticaPartido", {
    id_estadpartido: {
      type: DataTypes.INTEGER,
         autoIncrement: false,
         primaryKey: true
    },
    posesion:{
        type : DataTypes.INTEGER
    },
    pases:{
        type : DataTypes.INTEGER
    },
    precision_pases:{
       type : DataTypes.INTEGER
    },
    faltas:{
        type : DataTypes.INTEGER
    },
    corners:{
      type : DataTypes.INTEGER
    },
    offsides:{
      type : DataTypes.INTEGER
    },
    remates:{
    type : DataTypes.INTEGER
    },
    id_equipo:{
    type : DataTypes.INTEGER
    },
    createdAt : {
      type : DataTypes.DATE,
      field: "created_at"
    },
    updatedAt : {
      type : DataTypes.DATE,
      field: "updated_at"
    },  
    id_partido : {
      type : DataTypes.INTEGER
    }
 }, { freezeTableName: true,
  tableName: 'estadistica_partido'});
  



//Tarjeta.removeAttribute('id');
  return estadistica_partido;
};
