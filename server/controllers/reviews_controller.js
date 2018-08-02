module.exports = {
    postReview: (req, res) => {
    const dbSet = req.app.get('db');
    let {params} = req;
        const { title, content} = req.body;
        dbSet.post_review([params.id,title, content])
            .then(([response]) => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops, an error occured' })
                console.log(err);
            })
    },
}