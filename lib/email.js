const config     = require('../config')
const nodemailer = require('nodemailer')
const handlebars = require('handlebars')
const readFile   = require('./files').readFile
const { join }   = require('path')

const transporter = nodemailer.createTransport({
    sendmail: true,
    path: '/usr/sbin/sendmail'
})

const sendMail = ( from, to, subject, text ) => {
    transporter.sendMail({
        from: from,
        to: to,
        subject: subject,
        html: text
    }, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

const sendToAdministrator = ( name, email, additional, budget ) => {
    const path = join(__dirname, '/../templates/adminMail.hbs')
    return readFile(path).then(file => {
        const template = handlebars.compile(file)
        const text = template({
            name: name,
            email: email,
            additional: additional,
            budget: budget
        })
        sendMail(
            config.adminCredentials.emailFrom,
            config.adminCredentials.emailTo,
            config.emailAdminSubject,
            text
        )
    })
    // return true
}

module.exports.sendToAdministrator = sendToAdministrator
