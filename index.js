const express = require('express')
const app = express()
const port = 8000
const MailingRoutes = require("./Routes/MailingRoutes")
app.use(express.json());

var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/mailing/', MailingRoutes);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})