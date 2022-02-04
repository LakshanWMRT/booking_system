// const { request, response } = require('express')
const express =require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignupModules')

router.post('/signup',(request,response) => {
    const signedUpUser = new signUpTemplateCopy({
        VehicleOwner:request.body.VehicleOwner,
        VehicleModel:request.body.VehicleModel,
        VehicleNumber:request.body.VehicleNumber,
        Type:request.body.Type,
        Seats:request.body.Seats,
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