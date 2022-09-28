import express from 'express'
import cors from 'cors';
const app = express()
const port = process.env.PORT || 3001;

let todos =[];

app.use(express.json());
app.use(cors()) 

app.post('/todo',(req, res) => {
    todos.push(req.body.text);
    res.send({
        message:"Your todo is saved",
        data:todos
    })
})
app.get('/todo',(req, res) => {
    res.send({
        message:"Here is your Todo",
        data:todos 
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})