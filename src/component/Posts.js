import React, {Component} from 'react';
import * as Mui from '@material-ui/core';

class Posts extends Component{
  constructor(props){
   super(props);

  this.state ={
   data: [],
  };
}

 componentDidMount(){
   const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
   fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => this.setState({data: data}));
 }


  render() {
    const {data} = this.state;

    return (
      <div >
         <div align="center">
                     <Mui.Button variant="outlined" color="primary" href="/posts">Posts</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/albums">Albums</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/comments">Comments</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/photos">Photos</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/todos">Todos</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/users">Users</Mui.Button>
                     <h1 style={{ textAlign:'center' }}>DATA JSON PLACEHOLDER</h1><hr/>
         </div>
        <table border="2">
          <tr>
            <td>USER ID</td>
            <td>ID</td>
            <td>TITLE</td>
            <td>BODY</td>
          </tr>
          {data.map(todo =>
            <tr key={todo.id}>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.body}</td>
            </tr>
            )}
        </table>
      </div>
    );
  }
}

export default Posts;