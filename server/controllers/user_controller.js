module.exports = {
    register: (req, res) => {
    const dbSet = req.app.get('db');
        const { firstName,lastName, addressOne, addressTwo, city, state, zip, reference, claim, insured} = req.body;
        dbSet.post_user([req.params.id, reference, firstName, lastName, addressOne, addressTwo, city, state, zip, claim, insured])
            .then(([response]) => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops, an error occured' })
                console.log(err);
            })
    },
    updateUser: (req, res) => {
        const dbSet = req.app.get('db');
            const { addressOne, addressTwo, city, state, zip, reference, insured} = req.body;
            dbSet.edit_user_info([req.params.id, reference, addressOne, addressTwo, city, state, zip, insured])
                .then(([response]) => res.status(200).send(response))
                .catch(err => {
                    res.status(500).send({ errorMessage: 'Oops, an error occured' })
                    console.log(err);
                })
        }
        // email: (req, res) => {
        //     const dbSet = req.app.get('db');
        //         const { addressOne, addressTwo, city, state, zip, reference, insured} = req.body;
        //         const message = `<h3>A new claim has been received </h3>
        //         <ul>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //         </ul>`
        //         dbSet.create_user([req.params.id, reference, addressOne, addressTwo, city, state, zip, insured])
        //             .then(([response]) => res.status(200).send(response))
        //             .catch(err => {
        //                 res.status(500).send({ errorMessage: 'Oops, an error occured' })
        //                 console.log(err);
        //             })
        //     },
    
}