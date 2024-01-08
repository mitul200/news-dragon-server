const  express = require('express')
const app = express()
const port = process.env.port || 5000;
const cors = require('cors')

const categoris = require('./data/categoris.json')

app.get('/',(req , res)=>{
    res.send('Dragon is raning')

})
app.use(cors());
app.get('/categoris',(req,res)=>{
    res.send(categoris)
})

app.listen(port , ()=>{
    console.log(`Dragon api is running on port${port}`);
})