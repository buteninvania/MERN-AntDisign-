const {Router} = require('express')
const config = require('config')
const Projects = require('../models/Projects')
const router = Router()

//Создать проект
router.post(
    '/add',
    async (req, res) => {
        try {
            const {name, type} = req.body
            let projects = new Projects({name, type})
            await projects.save()
            res.status(201).json({data: {name: name, type: type, message: 'Проект создан'}})
        } catch (e) {
            res.status(500).json({message: "Запрос на сервер не прошел"})
        }
    })

//Получить список проектов
router.get(
    '/sync',
    async (req, res) => {
        try {
            console.log("запрос на сервер прошел")
            let projects = await Projects.find({})
            res.status(200).json({data: {projects}})
        } catch (e) {
            res.status(500).json({message: "Запрос на сервер не прошел"})
        }
    })


module.exports = router