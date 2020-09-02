const express = require('express')
const app = express()
const port = 3000

const {indexHome} = require('./pages')

const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: app,
    noCache: true,
})


app

.use(express.urlencoded({ extended: true}))
.use(express.static("public"))
.get("/", indexHome)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})