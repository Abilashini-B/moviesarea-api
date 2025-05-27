import express from 'express'

const app = express()
const PORT = 6969
app.get('/', (req, res) =>{
    res.json({message : 'hi i am new joiner'})
})

app.listen(PORT, ()=>{
    console.log(`The server is running in http://localhost:${PORT}`);
})

//CRUD 

//R-Read
app.get('/movies', ()=>{

})

//C-Create
app.post('/movies', ()=>{
    
})

//U-Update
app.put('/movies/:id', ()=>{
    
})

//D-Delete
app.delete('/movies/:id', ()=>{
    
})