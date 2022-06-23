const express = require('express');
const app = express();
const data = require('./employee.json')
const port = 8001;

// GET METHOD
app.get('/', (req, res) => {
    // res.send(JSON.parse(JSON.stringify(data)))
    res.send(data);

})

app.get('/employee/:employeeID', (req, res) => {
    res.send(data.Employees[req.params.employeeID - 1])
})

// PORTS
app.listen(port, () => {
    console.log(`app running on ${port}`)
})
