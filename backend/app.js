const redis = require('redis')
const client = redis.createClient();
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const cryptoRandomString = require('crypto-random-string');

app.use(bodyParser.json())
app.use(cors())

app.post('/add', (req,res) => {
    if(req.headers["content-type"] != 'application/json')
        res.status(400).send('bad headers')
    else {
        let id = cryptoRandomString({length: 10})
        let task = req.body.task;
       
        client.set(id,task, redis.print)

        client.on("error", (error) => {
            console.error(error)
            res.status(400)
            .send(`redis-error: ${error}`)
        })

        res.status(200)
        .send('sucess added');
    }
})

app.post('/delete', (req,res) => {
    if(req.headers["content-type"] != 'application/json')
    res.status(400).send('bad headers')
    else {
        let id = req.body.id;
        
        client.del(id)

        client.on("error", (error) => {
            console.error(error)
            res.status(400)
            .send(`redis-error: ${error}`)
        })

        res.status(200)
        .send('sucess delete');
    }
})

app.get('/all', (req,res) => {
    let todo = [];
    client.keys('*', (err, keys) =>{
        if(keys.length == 0)
            res.status(200).send([])
        keys.forEach((id, index) => {
            client.get(id, (err, data) => {
                todo.push({
                    id: id,
                    task: data
                });
                
                if(index == (keys.length - 1))
                res.status(200).send(todo)
            })
        })
    })

})

app.listen(8080);