const mongoose = require('mongoose');
const Link = mongoose.model('Link')


//create
exports.post = (req, res, next) => {
    var link = new Link(req.body);

    link.save().then( x => {
        res.status(200).send({message: 'Link cadastrado com sucesso! '})
    }).catch(e => {
        res.status(400).send({message: 'Houve um erro ao cadastrar o link', data: e})
    })
    
};

//read
exports.get = (req, res, next) => {
    Link.find({}, 'title url').then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    })
}

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

//read
exports.getByTag = (req, res, next) => {
    Link.find({
        tags: req.params.tags
    }, 'title url').then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    })
}