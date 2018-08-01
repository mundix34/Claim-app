module.exports = {
    register: (req, res) => {
        const { addressOne, addressTwo, city, state, zip, reference_id} = req.body;
        dbSet.create_user([addressOne, addressTwo, city, state, zip, reference_id])
            .then((users) => res.status(200).send([addressOne, addressTwo, city, state, zip, reference_id]))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops, an error occured' })
                // console.log(err);
            })
    },
    getClaim: (req, res, next) =>{
        let {params} = req;
        // console.log(params);
        const dbSet = req.app.get('db');
        dbSet.find_claim(params.id)        
            .then((claim) => res.status(200).send(claim))
            .catch(err => res.status(404).send({ errorMessage: 'Oops, encountered error' }));
            
    
        
    }
    
}