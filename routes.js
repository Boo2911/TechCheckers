const express = require('express')
const router = express.Router()

const express = require('express')
const Router = express.Router()
const profileTemplateCopy = require('../models/profilemodels')

router.post('/profile',(request, response) =>{
    const signedUpUser = new profileTemplateCopy({
        fullName:request.body.fullName,
        email:request.body.email,
        address:request.body.address,
        pincode:request.body.pincode,
        contact:request.body.contact,
        bio:request.body.bio,
        category:request.body.category,
        brandname:request.body.brandname
        
    })
    signedUpUser.save()
    .then(date =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router