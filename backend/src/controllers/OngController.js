const connection = require('../database/connection');
const { generateId } = require('../utils/generateId');

module.exports = {
    async insert(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;
        const id = generateId();
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        return res.json({ id });
    },
    async index(req, res) {
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    }
}