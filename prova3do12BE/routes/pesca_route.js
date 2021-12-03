const express = require('express')
const router = express.Router()

const pesca_controll = require('../controll/pesca_controll.js')
router.get('/pescaria/pesca', pesca_controll.getPesca)
router.get('/pescaria/pesca/:id', pesca_controll.getPescaId)
router.post('/pescaria/pesca/create', pesca_controll.postPesca)
router.put('/pescaria/pesca/update', pesca_controll.putPesca)
router.delete('/pescaria/pesca/delete/:id', pesca_controll.deletePesca)

module.exports = router