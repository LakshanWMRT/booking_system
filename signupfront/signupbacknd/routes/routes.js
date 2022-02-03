// const { request, response } = require('express')
const express =require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignupModules')

router.post('/signup',(request,response) => {
    const signedUpUser = new signUpTemplateCopy({
        FullName:request.body.FullName,
        userName:request.body.userName,
        email:request.body.email,
        password:request.body.password,
        Date:request.body.Date
    })

    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

// router.get('/signup')

module.exports = router