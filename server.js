const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res) =>{
    res.send([
        {
          'id':1,
          'image':'./image/1.jpg',
          'name':'홍길동',
          'birthday':'20010320',
          'gender':'남자',
          'job':'programer'
        }
      ,
      {
        'id':2,
        'image':'./image/2.jpg',
        'name':'이순신',
        'birthday':'20010320',
        'gender':'남자',
        'job':'장군'
      },
      {
        'id':3,
        'image':'./image/1.jpg',
        'name':'유관순',
        'birthday':'20010320',
        'gender':'여자',
        'job':'운동가'
      }
      ]);
});


app.listen(port,()=>console.log(`Listening on port ${port}`));