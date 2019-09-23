"use strict";

module.exports = function(sequelize, DataTypes) {
  var jugador = sequelize.define("jugador", {
    id: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_equipo:{
        type : DataTypes.INTEGER
    },
    posicion:{
    type : DataTypes.STRING
      },  
      edad:{
        type : DataTypes.INTEGER
    },
    pierna_habil:{
      type : DataTypes.STRING
  },
  altura:{
    type : DataTypes.INTEGER
},
goles_hechos:{
  type : DataTypes.INTEGER
},
dorsal:{
  type : DataTypes.INTEGER
},
goles_recibidos:{
  type : DataTypes.INTEGER
},
penales_atajados:{
  type : DataTypes.INTEGER
},
promedio_gol_arq:{
  type : DataTypes.STRING
},
promedio_gol_del:{
  type : DataTypes.STRING
},
penales_convertidos:{
  type : DataTypes.INTEGER
},
penales_errados:{
  type : DataTypes.INTEGER
},
nombre_completo:{
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
  tableName: 'jugador'});
  



//Tarjeta.removeAttribute('id');
  return jugador;
};
