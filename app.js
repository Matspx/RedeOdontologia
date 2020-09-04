const express = require('express')
const app = express()
const router = express.Router();

const port = 3000

const {indexHome} = require('./pages')

///const nunjucks = require('nunjucks')

//nunjucks.configure('src/views', {
//    express: app,
//    noCache: true,
//})

router.get('/',indexHome)

app
.use(express.urlencoded({ extended: true}))
.use(express.static("public"))
.use('/', router);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})