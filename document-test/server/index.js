const express =require('express')
const app= express()
const mysql= require('mysql')
const cors= require('cors')


app.use(express.json())
app.use(cors())

app.listen(3002, ()=>{
    console.log('server is running')
})

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'testdb',

})


app.post('/register',(req, res)=>{
    const setEmail = req.body.Email
    const setUserName = req.body.UserName
    const setPassword = req.body.password


    const SQL='INSERT INTO users (email, username, password) VALUES (?,?,?)'

    const Values =[setEmail,setUserName,setPassword]

    db.query(SQL, Values, (err, result)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('succes')
            res.send({message: 'user added'})
        }
    })
})

app.post('/login',(req, res)=>{
    
    const setLoginUserName = req.body.loginUserName
    const setLoginPassword = req.body.oginPassword


    const SQL='SELECT * FROM users WHERE username = ? &&  password ='

    const Values =[setLoginUserName,setLoginPassword]

    db.query(SQL, Values, (err, result)=>{
        if(err){
            res.send({error:err})
        }
       if(result.length > 0){
        res.send(result)
       }
       else{
        res.send({
            message: 'dont match'
        })
       }
    })
})