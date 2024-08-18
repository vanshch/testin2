const express = require('express');  
const app = express();  
const PORT = process.env.PORT || 3000;  
const path = require('path')
const {createTodo} = require("./types.js")
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

// A simple route  
app.get('/', (req, res) => {  
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});  

// making a todo post method 
app.post('/todo' , (req,res) => {
    const todo = createTodo.safeParse(req.body)
    if(!todo.success){
        console.log(todo.error)
        res.sendStatus(400)
    }

    console.log('here')
    console.log(todo.data.title)
    console.log(todo.data.completed)
})

app.get('/get' , (req, res) => {
    const id = req.body.id;
    console.log(id)
    // res.send('ok')
})


// Start the server  
app.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});