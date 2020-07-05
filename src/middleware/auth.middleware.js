const auth = async (req, res, next) => {

    try {

        req.user = {
            name: 'Sameer',
            role: 'owner'
        }
    } catch(e) {
        res.status(401).send({ error: 'Please  authenticate.!' });
    }

    next();
}

module.exports = auth;