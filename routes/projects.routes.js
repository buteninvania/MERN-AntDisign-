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
            res.status(201).json({data: {id: projects._id}})
        } catch (e) {
            res.status(500).json({message: "Запрос на сервер не прошел"})
        }
    })

//Получить список проектов
router.get(
    '/sync',
    async (req, res) => {
        try {
            let data = await Projects.find({})
            let projects = data.map(i => {
                return {
                    id: i._id,
                    name: i.name,
                    type: i.type
                }
            })
            res.status(200).json({data: {projects}})
        } catch (e) {
            res.status(500).json({message: "Запрос на сервер не прошел"})
        }
    })

//Получить данные проекта
router.post(
    '/data',
    async (req, res) => {
        try {
            const {id} = req.body
            let dataProject = await Projects.find({_id: id})
            dataProject = dataProject[0]
            const data = {
                name: dataProject.name,
                type: dataProject.type,
                id: dataProject.id
            }
            res.status(200).json({data})
        } catch (e) {
            res.status(500).json({message: "Запрос на сервер не прошел"})
        }
    }
)

//Удалить проект, если ты owner
router.post(
    '/delete',
    async (req, res) => {
        try {
            const {position, id} = req.body
            if (position === 'owner') {
                let response = await Projects.remove({_id: id})
                if (response.n === 1) {
                    res.status(200).json({data: {message: "проект удалён"}})
                } else {
                    res.status(200).json({data: {message: "нет проекта"}})
                }
            } else  {
                res.status(401).json({data: {message: "вы не являетесь владельцем проектов"}})
            }
        } catch (e) {
            res.status(500).json({message: "Запрос на сервер не прошел"})
        }
    }
)


module.exports = router