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
    Link.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            url: req.body.url
        }
    }).then(x => {
        res.status(201).send({
            message: 'Link atualizado com sucesso!'
        });
    }).catch (e => {
        res.status(400).send({
            message: 'Falha ao atualizar link',
            data: e
        });
    });
};

//delete
exports.delete = (req, res, next) => {
    Link
    .findOneAndRemove(req.body.id)
    .then(x => {
        res.status(201).send({
            message: 'Link removido com sucesso!'
        });
    }).catch (e => {
        res.status(400).send({
            message: 'Falha ao remover link',
            data: e
        });
    });
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