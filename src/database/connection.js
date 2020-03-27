const knex = require("knex");
const configuration = require("../../knexfile");

const devConnection = knex(configuration.development);

module.exports = devConnection;