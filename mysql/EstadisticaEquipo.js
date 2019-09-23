"use strict";

module.exports = function(sequelize, DataTypes) {
  var estadistica_equipos = sequelize.define("estadisticaEquipo", {
    id_estadistica_equipo: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_equipo:{
        type : DataTypes.INTEGER
    },
    goles_favor:{
        type : DataTypes.INTEGER
    },
    goles_contra:{
       type : DataTypes.INTEGER
    },
    partidos_ganados:{
        type : DataTypes.INTEGER
    },
    partidos_perdidos:{
      type : DataTypes.INTEGER
    },
    partidos_empatados:{
      type : DataTypes.INTEGER
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
  tableName: 'estadistica_equipos'});
  



//Tarjeta.removeAttribute('id');
  return estadistica_equipos;
};
