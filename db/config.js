const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres'
  },

  production: {
    url: URI,
    dialect: 'postgres'
  }
}

//Se exporta de esta manera por la estructura estándar de Sequelize para poder manejar múltiples entornos de configuración
