const express = require('express');  
const app = express();  
const PORT = process.env.PORT || 3000;  
const path = require('path')

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// A simple route  
app.get('/', (req, res) => {  
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});  

// making a todo post method 
app.post('/post' , (req, res) => {
    console.log(JSON.stringify(req.body))
    res.send('ok')
})

app.get('/get' , (req, res) => {
    const id = req.body.id;
    console.log(id)
    res.send('ok')
})


// Start the server  
app.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});