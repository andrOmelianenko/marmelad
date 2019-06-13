const express     = require('express')
const publicApi   = express.Router()
const sendToAdministrator = require('../lib/email').sendToAdministrator

const requestHandler = ( promise, req, res ) => {
    promise.then(data => {
        if (data === null) {
            res.status(404).json({})
        }
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
}

publicApi.post('/mail', ( req, res ) => {
    const name       = req.body.name
    const email      = req.body.email
    const additional = req.body.textarea
    const budget     = req.body.budget
    requestHandler( sendToAdministrator(name, email, additional, budget), req, res )
})

module.exports.publicApi = publicApi
