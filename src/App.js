import React from 'react';
import Customer from './components/Customer';
import './App.css';
const customers = [
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
]; 

function App()  {
  return (
    <div>
    {
      customers.map(c => {
        return(
          <Customer 
            key = {c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />          

        )
      })
    }
    </div>
  
  );
}

export default App;
