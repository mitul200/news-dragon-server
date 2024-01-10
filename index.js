const  express = require('express')
const app = express()
const port = process.env.port || 5000;
const cors = require('cors')

const categoris = require('./data/categoris.json')
const news = require('./data/news.json')

app.get('/',(req , res)=>{
    res.send('Dragon is raning')

})
app.use(cors());
app.get('/categoris',(req,res)=>{
    res.send(categoris)
})

app.get('/news', (req, res)=>{
    res.send(news)
})

app.get('/news/:id', (req , res)=>{
    const id  = req.params.id
    const selecetId = news.find(n=>n._id === id)
    res.send(selecetId)
})


app.get('/categoris/:id', (req , res)=>{
    const id = parseInt(req.params.id)
    if(id === 0){
        res.send(news)
    }
    else{
        const categorisId = news.filter(n => parseInt(n.category_id) === id)
        res.send(categorisId)
    }
})

// app.get('/news/:id', (req , res)=>{
//     const id = req.params.id
//     const selecetId = news.find(n => n._id === id)
//     res.send(selecetId)
//     console.log(id);
// })


app.listen(port , ()=>{
    console.log(`Dragon api is running on port${port}`);
})