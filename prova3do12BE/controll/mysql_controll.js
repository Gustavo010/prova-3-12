const mysql = require('mysql')
const con = mysql.createConnection({
    'user':'root',
    'database':'pescaria',
    'host':'localhost'
})

module.exports ={
    con
}