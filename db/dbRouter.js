const express = require('express');

const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*')
        .from('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            res.status(500).json(error);
            console.log('error');
        });
});

router.post('/', validPost, (req, res) => {
    const data = req.body;
    db('cars')
        .insert(data)
        .then(diddy => {
            res.status(200).json(diddy);
            console.log(req.body);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.get('/:id', validId, (req, res) => {
    db.select('*')
        .from('cars')
        .where({ id: req.params.id })
        .then(car => {
            res.status(200).json(car);
            console.log(car);
        })
        .catch(error => {
            res.status(500).json(error);
            console.log(error);
        });
});

router.put('/:id', validId, (req, res) => {
    db.select('*')
        .from('cars')
        .where({ id: req.params.id })
        .update(req.body)
        .then(change => {
            res.status(200).json(change);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.delete('/:id', validId, (req, res) => {
    db.select('*')
        .from('cars')
        .where({ id: req.params.id })
        .del()
        .then(remove => {
            res.status(200).json({ Message: 'removed car' });
        })
        .catch(error => {
            res.status(500).json(error);
        });
});


//add in some middleware for practice
function validPost(req, res, next) {
    const postData = req.body;
    if (!postData.make && !postData.model && !postData.VIN && !postData.mileage) {
        res.status(400).json({ Message: 'no data to enter' });
    } else {
        if (!postData.make) {
            res.status(400).json({ Message: 'missing data in make field' });
        } else {
            if (!postData.model) {
                res.status(400).json({ Message: 'missing data in model field' });
            } else {
                if (!postData.VIN) {
                    res.status(400).json({ Message: 'missing data in VIN field' });
                } else {
                    if (!postData.mileage) {
                        res.status(400).json({ Message: 'missing data in mileage field' });
                    } else {
                        next();
                    };
                };
            };
        };
    };
}

function validId(req, res, next) {
    const id = req.params.id;
    db.select('*')
        .from('cars')
        .where({ id: req.params.id })
        .then(cars => {
            if (cars === null || cars == 0) {
                res.status(404).json({ Message: 'nothing by that id' });
            } else {
                console.log(id);
                req.cars = cars;
                next();
            };
        });
};

module.exports = router;