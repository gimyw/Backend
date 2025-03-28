const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors()) // 모든요청 허용용


app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/user/:id', function (req, res) {
  // const q = req.params
  // console.log(q.id)
  const q = req.query
  console.log(q)
  console.log(q.q)

  res.json({'userid' : 'q.id'})
})// response '강아지'라는 단어를 돌려줘 localhost:3000/dog에 

app.get('/sound/:name', (req, res) => {
  const {name} = req.params

  if(name == "dog"){
    res.json({'sound' : '멍멍'}) 
  }
    else if (name == "cat"){
      res.json({'sound' : '야옹'})
    }else if (name == "pig"){
      res.json({'sound' : '꿀꿀'})
    }
    else
    {
      res.json({'sound' : '알수없음'})
    }
  
  
  
})
app.listen(3000)
