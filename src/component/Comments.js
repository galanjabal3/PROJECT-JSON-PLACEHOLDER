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
        <div class="navbar-fixed ">
           <nav class="nav-extended #000000 black">
           <div class="nav-wrapper ">
            <a href="#" class="brand-logo">RESOURCES</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#"><i class="material-icons">more_vert</i></a></li>
            </ul>
           </div>
           <div class="nav-content">
            <ul class="tabs tabs-transparent">
              <li class="tab"><a href="/" class="active">Posts</a></li>
              <li class="tab"><a href="/albums" class="active">Albums</a></li>
              <li class="tab"><a href="/comments" class="active">Comments</a></li>
              <li class="tab"><a href="/photos" class="active">Photos</a></li>
              <li class="tab"><a href="/todos" class="active">Todos</a></li>
              <li class="tab"><a href="/users" class="active">Users</a></li>
            </ul>
          </div>
         </nav>
         </div><br/><br/>
     <Mui.Container fixed>         
     <h2 style={{ textAlign:'center' }}>DATA COMMENTS</h2>
        <table border="2">
          <tr class="#white-text d50000 red accent-4">
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
        </Mui.Container>
      </div>
    );
  }
}

export default Comments;