//create
exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};
//update
exports.put = (req, res, next) => {
    const id = req.params.id
    res.status(200).send({
        id: id,
        item: req.body
    })
};
//delete
exports.delete = (req, res, next) => {
    res.status(201).send(req.body)
};