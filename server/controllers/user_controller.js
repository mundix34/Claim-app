module.exports = {
    register: (req, res) => {
    const dbSet = req.app.get('db');
    
         const userMessage='We have received your claim'       
        const { firstName,lastName, email, addressOne, addressTwo, city, state, zip, reference, claim, insured} = req.body;
        const AdminMessage = `<h3>A new claim has been received </h3>
                <ul>
                <li>${ firstName } ${lastName}</li>
                <li> ${ claim }</li>
                <li> ${ insured }</li>
                <li> ${ reference }</li>
                </ul>`;
        dbSet.post_user([req.params.id, firstName, lastName, email, addressOne, addressTwo, city, state, zip, claim, reference, insured])
            .then(([response]) => res.status(200).send( {msg: userMessage, response}))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops, an error occured' })
                console.log(err);
            })
    },
    updateUser: (req, res) => {
        const dbSet = req.app.get('db');
            const { firstName,lastName, email, addressOne, addressTwo, city, state, zip, reference, claim, insured} = req.body;
            dbSet.edit_user_info([req.params.id, reference, firstName, lastName, email, addressOne, addressTwo, city, state, zip, claim, insured])
                .then(([response]) => res.status(200).send(response))
                .catch(err => {
                    res.status(500).send({ errorMessage: 'Oops, an error in update occured' })
                    console.log(err);
                })
        },
        getUser: (req, res, next) =>{
            let {params} = req;
            const dbSet = req.app.get('db');
            dbSet.get_user(params.id)        
                .then((user) => res.status(200).send(user))
                .catch(err => res.status(404).send({ errorMessage: 'Oops, encountered error' }));
                
        
            
        },
        
}