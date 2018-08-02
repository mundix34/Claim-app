module.exports = {
    register: (req, res) => {
    const dbSet = req.app.get('db');
        const { addressOne, addressTwo, city, state, zip, reference} = req.body;
        dbSet.create_user([req.params.id, reference, addressOne, addressTwo, city, state, zip])
            .then(([response]) => res.status(200).send(response))
            .catch(err => {
                console.log(err)
                res.status(500).send({ errorMessage: 'Oops, an error occured' })
                console.log(err);
            })
    },
}