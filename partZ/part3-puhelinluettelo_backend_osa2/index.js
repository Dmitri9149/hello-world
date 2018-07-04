const express = require('express')
const app = express()



let apiPersons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Martti Tienari",
    number: "040-123456",
    id: 2
  },
  {
    name: "Arto Järvinen",
    number: "040-123456",
    id: 3
  },
  {
    name: "Lea Kutvonen",
    number: "040-123456",
    id: 4
  }
]  


  
app.get('/info', (req, res) => {
  const size= apiPersons.length;
  
  res.send("<div>puhelinluetelossa  " + size +  "  henkilön tiedot</div>");
  
  console.log(`Server sends size as  ${size}`)
})




app.get('/api/persons', (req, res) => {
  res.json(apiPersons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})