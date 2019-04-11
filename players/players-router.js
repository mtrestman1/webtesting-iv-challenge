const express = require('express');
const knex = require('knex');
const router = express.Router()

const db = require('../data/dbConfig');

router.get('/', (req, res) => {
    db('players')
    .then(cohorts => {
        res.status(200).json(cohorts)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.post('/', (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({ message: 'Please provide a name'})
    } else {
        return db('players').insert(req.body)
        .then(ids => {
            const id = ids[0];
            db('players')
            .where({id})
            .then(players => {
                res.status(201).json(players)
            })
        })
        .catch(error => {
            res.status(500).json({ message: `there was an error adding this to the db ${error}`})
        })
    }
})

module.exports = router;