const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = mongoose.connection;
const Schema = mongoose.Schema;
let id = null;
const app = express()


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Headers', 'Origin', 'X-Requested-With', 'Accept')
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS', 'GET', 'POST', 'PUT', 'DELETE')
//     res.setHeader('Access-Control-Allow-Credentials', true)
//     next()
// })

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static('dist/my-app'))
app.set('view engine', 'ejs')

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://user1:user-password@cluster0.swyqy.gcp.mongodb.net/toDoList?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
db.on("error", (err) => {
    console.log(err)
})
db.once("open", () => {
    console.log("Connected to db")
})

const schema = new Schema({
    login: {
        type: String,
        required: false   
    },
    password: {
        type: String,
        required: false   
    },
    tasks: {
        type: Array,
        required: false
    },
    created: {
        type: Array,
        required: false
    },
    doneTasks: {
        type: Array,
        required: false
    },
    finished: {
        type: Array,
        required: false
    }
})

const ModelToDo = mongoose.model('ModelToDo', schema ,'tasksToDo');

app.get('/register', async (req, res) => {
    res.render('index')
})
app.get('/todo', (req, res) => {
    if(id !== null){
        res.render('index')
    }
    else{
        res.redirect('/')
    }
})
app.get('/', async (req, res) => {
    id = null;
    res.render('index')
})
 
app.post('/api/signIn', async (req, res) => {
    let user = await ModelToDo.findOne({login: req.body.login, password: req.body.password})
    if(user == null){
        res.send('empty')
    }
    else{
        id = user._id
        res.redirect('/todo')
    }
})  

app.post('/api/register', async(req, res) => {
    const otherUsers = await ModelToDo.find({login: req.body.login})
    if(otherUsers.length === 0){
        let model = new ModelToDo({
            login: req.body.login,
            password: req.body.password
        }) 
        model.save((err, doc) => {
            if(err){
                console.log(err) 
            }
            else{
                console.log("user saved succussfully!");
                id = model._id
                res.redirect('/todo')
            }
        })
    }
    else{
        res.send('occupied')
    }
})

app.get('/api/checkUser', (req, res) => {
    if(id === null){
        res.redirect('/')
    }
    else{
        res.send('is')
    }
})

app.get('/api/tasks', async (req, res) => { 
    const data_ = await ModelToDo.findById(id)
    if(id === null){
        res.redirect('/')
    }
    else{
        const data = {
            tasks: data_.tasks,
            created: data_.created,
            finished: data_.finished,
            doneTasks: data_.doneTasks,
        }
        res.send(data)
    }
})

app.post('/api/saveTask', async(req, res) => {
    await ModelToDo.findByIdAndUpdate(id, { tasks: req.body.tasks, created: req.body.created}, async(err) => {
        if(err){
            console.log(err)
        }
        else{
            let model_ = await ModelToDo.findById(id)
            let model = {
                tasks: model_.tasks,
                created: model_.created
            }
            res.send(model)
        }
    })
})

app.post('/api/finishTask', async (req, res) => {
    await ModelToDo.findByIdAndUpdate(id, { doneTasks: req.body.doneTasks, finished: req.body.finished}, async(err) => {
        if(err){
            console.log(err)
        }
        else{
            let model_ = await ModelToDo.findById(id)
            let model = {
                doneTasks: model_.doneTasks,
                finished: model_.finished
            }
            res.send(model)
        }
    })

})

app.post('/api/remove', async (req, res) => {
    let model = await ModelToDo.findByIdAndUpdate(id, {tasks: req.body.tasks, created: req.body.created})
    res.send(model)
})

app.get('/api/removeAll', async (req, res) => {
    let model = await ModelToDo.findByIdAndUpdate(id, {doneTasks: [], finished: []})
    res.send(model)
})

app.get('/api/logOut', async (req, res) => {
    id = null;
    res.redirect('/')
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("Listen", port)
})

