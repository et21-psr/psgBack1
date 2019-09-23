"use strict";

module.exports = function(sequelize, DataTypes) {
  var equipos = sequelize.define("equipo", {
    id_equipo: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    director_tecnico:{
        type : DataTypes.STRING
    },
    nombre:{
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
  tableName: 'equipos'});
  



//Tarjeta.removeAttribute('id');
  return equipos;
};
