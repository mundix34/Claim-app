module.exports = {
    
    getClaim: (req, res, next) =>{
        let {params} = req;
        // console.log(params);
        const dbSet = req.app.get('db');
        dbSet.find_claim(params.id)        
            .then((claim) => res.status(200).send(claim))
            .catch(err => res.status(404).send({ errorMessage: 'Oops, encountered error' }));
            
    
        
    }
    
}