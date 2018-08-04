module.exports = {
    postReview: (req, res) => {
    const dbSet = req.app.get('db');
    let {params} = req;
        const { userId, title, content} = req.body;
        dbSet.post_review([userId,title, content])
            .then((response) => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops, an error occured' })
                console.log(err);
            })
    },
    getReviews: (req, res, next) =>{
        const dbSet = req.app.get('db');
        dbSet.get_reviews()        
            .then((response) => res.status(200).send(response))
            .catch(
                err => {
            console.log(err);

                    res.status(404).send(
                        { errorMessage: 'Oops, encountered error' }
                    )
                }
            );
            
        
    },
    deleteReview: (req, res, next) =>{
        const dbSet = req.app.get('db');
        const {params} = req;
        dbSet.delete_review([ params.id ])
          .then( () => {
              dbSet.get_reviews().then( responseFromDatabase => res.status(200).send(responseFromDatabase))
          } )
         .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."});
            // console.log(err)
          } )
        
    },
}