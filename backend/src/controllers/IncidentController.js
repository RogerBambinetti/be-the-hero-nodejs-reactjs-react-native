
const connection = require('./database/connection');

module.exports = {
    async insert(req, res) {
        const { title, description, value } = request.body;
        const ong_id = req.headers.authorization;
        const [id] = await connection('incidents').insert({
            title,
            description,
            value
        })
        return res.json({ id });
    },
    async index(req, res) {
        const { page = 1 } = request.query;
        const [count] = await connection('incidents').count();
        const ongs = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .imit(5).offset((page - 1) * 5)
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        res.header('X-Total-Count', count['count(*)']);

        return res.json(ongs);
    },
    async delete(req, res) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents').where('id', id).select('ong_id').first();
        if (incident.ong_id != ong_id) {
            return res.status(401).json({ error: 'Operation not permitted' });

        }
        await connection('incidents').where('id', id).delete();
        res.status(204).send();
    }
}