const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth.middleware')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

router.get(
    '/sync',
    async (req, res) => {
        try {
            let employees = await User.find()
            employees = employees.map((i) => {
                return {
                    email: i.email,
                    login: i.loginUser
                }
            })

            res.status(201).json(employees)
        } catch (e) {
            res.status(500).json({message: "Запрос на сервер не прошел"})
        }
    })

module.exports = router