module.exports = {
    
    getClaim: (req, res, next) =>{
        let {params} = req;
        const dbSet = req.app.get('db');
        dbSet.find_claim(params.id)        
            .then((claim) => res.status(200).send(claim))
            .catch(err => res.status(404).send({ errorMessage: 'Oops, encountered error' }));
            
    
        
    },
    getComparables: (req, res, next) =>{
        let {params, query} = req;
        const dbSet = req.app.get('db');
        dbSet.find_comparable([params.id, query.desc])        
            .then((claim) => res.status(200).send(claim))
            .catch(err => res.status(404).send({ errorMessage: 'Oops, encountered error' }));
            
    
        
    },
    getCoords:(req, res, next) =>{
        let {params} = req;
        const dbSet = req.app.get('db');
        dbSet.get_coords([params.id])        
            .then((coords) => res.status(200).send(coords))
            .catch(err => res.status(404).send({ errorMessage: 'Oops, encountered error in coords' }));
            
    
        
    }
    
}