const { con } = require("./mysql_controll.js")
const modelo = require('../model/pesca_model.js')

const all = (req,res) => {
    let string = 'select * from pesca'
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

const get_id = (req,res) => {
    let string = 'select * from pesca where id = '+ req.params.id
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

const postPesca = (req,res) => {
    let body = req.body
    let string = 'insert into pesca(cidade, quantidade) values (\'' + body.cidade + '\',' + body.quantidade +')' 
    console.log(string)
    con.query(string, (err, result)=>{
        if(err != null){
            res.status(400).end()
        }else{
            res.status(200).end()
        }
    })
}


const putPesca = (req,res) => {
    let id = req.body.id
    let cidade = req.body.cidade;
    let quantidade = req.body.quantidade;
    let string = `update pesca set cidade = '${cidade}', quantidade = ${quantidade} where id = ${id}`
    con.query(string, (err, result)=>{
        if(result.affectedRows == 1){
            con.query('select * from pesca where id ='+id, (err, result)=>{
                res.json(result)
            })
        }else{
            res.send(400).end()
        }
    })
}

const deletePesca = (req,res) => {
    let string = 'delete from pesca where id = ' + req.params.id
    con.query(string, (err, result)=>{
        if(result.affectedRows == 0){
            req.send(400).end()
        }else{
            res.send(200).end()
        }
    })
}



module.exports = {
    all,
    get_id,
    postPesca,
    putPesca,
    deletePesca
}
