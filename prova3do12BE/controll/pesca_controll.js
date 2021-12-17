const { con } = require("./mysql_controll.js")
const modelo = require('../model/pesca_modell.js')
const express = require("express")

const getPesca = (req,res) => {
    let string = 'select * from pesca'
    con.query(string, (err, result)=>{
        res.json(result)
    })
}
const getPescaId = (req,res) => {
    let string = 'select * from pesca where id = '+ req.params.id
    con.query(string, (err, result)=>{
        if(result != ""){
            res.json(modelo.pesca_modell(result[0]))
        }else{
            res.status(404).end()
        }
        
    })
}

const postPesca = (req, res) => {

    let id = req.body.id
    let cidade = '\'' + req.body.cidade + '\''
    let quantidade = req.body.quantidade

    let string = `insert into pesca(id, cidade, quantidade) values (${id},${cidade},${quantidade})`
    con.query(string, (err, result)=>{
        if(err != null){
            res.status(400).end()
        }else{
            res.status(201).end()
        }
    })
}

const putPesca = (req, res) => {

    let id = req.body.id
    let cidade = '\'' + req.body.cidade + '\''
    let quantidade = req.body.quantidade

    let string = `update pesca set cidade = ${cidade}, quantidade = ${quantidade} where id = ${id}`
    con.query(string, (err, result)=>{
        if (result.affectedRows > 0) {
            res.status(200).end()
        } else {
            res.status(404).end()
        }
    })
}


const deletePesca = (req,res) => {
    let string = 'delete from pesca where id = ' + req.params.id
    con.query(string, (err, result)=>{
       if(result.affectedRows == 0){
           res.send(400).end()
       }else{
           res.send(200).end()
       }
    })
}

module.exports = {
    getPesca,
    getPescaId,
    postPesca,
    putPesca,
    deletePesca,
}
