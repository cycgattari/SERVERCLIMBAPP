
module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      escalador: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      encadenada: {
        type: Sequelize.BOOLEAN
      },
      avista: {
        type: Sequelize.BOOLEAN
      },
      fecha: {
        type: Sequelize.DATEONLY,
      },
      grado: {
        type: Sequelize.STRING
      },
      murosector: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      realizada: {
        type: Sequelize.BOOLEAN
      },
      artificial: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Tutorial;
  };
  