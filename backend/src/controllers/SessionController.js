
const connection = require('./database/connection');

module.exports = {
    async insert(req, res) {
        const { id } = request.body;
        const ong = await connection('ongs').where('id', id).select('name').first();
        if(!ong){
            return res.status(400).json({error: 'No ong found'});
        }

        return res.json(ong);
    }
}