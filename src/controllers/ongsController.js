const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
     async listAll(req, res){
        return res.json(await connection('ongs').select('*'));
    },
    async create(req, res) {
        const id = crypto.randomBytes(4).toString('HEX');
        const { name, email, whatsapp, city, uf } = req.body;
        await connection('ongs').insert({ id, name, email, whatsapp, city, uf })
        return res.json({ id });
      }
};