import React from 'react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './App.css';
import { render } from '@testing-library/react';

const styles = theme =>({
  root: {
    width:'100%',
    marginTop: theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table: {
    minWidth:1080
  }
})
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

function App(props) { 

  const { classes } = props;
    return (
      <Paper className={classes.root }>
      
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
        </TableBody>
        </Table>
      
      </Paper>
    
    );

}

export default withStyles(styles)(App);
