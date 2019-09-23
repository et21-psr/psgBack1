"use strict";

module.exports = function(sequelize, DataTypes) {
  var usuario = sequelize.define("usuario", {
    id_usuario: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    mail:{
        type : DataTypes.STRING
    },
    contraseña:{
        type : DataTypes.STRING
    },
    id_equipo:{
       type : DataTypes.INTEGER
    },
    administrador:{
        type : DataTypes.INTEGER
    },
    rango:{
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
  tableName: 'usuario'});
  



//Tarjeta.removeAttribute('id');
  return usuario;
};
