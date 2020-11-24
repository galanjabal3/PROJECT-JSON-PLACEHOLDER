import React, {Component} from 'react';
import * as Mui from '@material-ui/core';

class Comments extends Component{
  constructor(props){
   super(props);

  this.state ={
   data: [],
  };
}

 componentDidMount(){
   const apiUrl = 'https://jsonplaceholder.typicode.com/comments';
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
            <td>POST ID</td>
            <td>ID</td>
            <td>NAMA</td>
            <td>EMAIL</td>
            <td>BODY</td>
          </tr>
          {data.map(todo =>
            <tr key={todo.id}>
              <td>{todo.postId}</td>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>{todo.email}</td>
              <td>{todo.body}</td>
            </tr>
            )}
        </table>
      </div>
    );
  }
}

export default Comments;