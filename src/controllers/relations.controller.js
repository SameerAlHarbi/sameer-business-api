const relationsManager = require('../managers/relations.manager');

exports.getAllRelations = async (req, res) => {

    try {

        const results = await relationsManager.getAllRelations();
        res.send(results)
    } catch(e) {
        res.status(500).send();
    }
}