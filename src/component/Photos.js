import React, {Component} from 'react';
import * as Mui from '@material-ui/core';

class Photos extends Component{
  constructor(props){
   super(props);

  this.state ={
   data: [],
  };
}

 componentDidMount(){
   const apiUrl = 'https://jsonplaceholder.typicode.com/photos';
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
     <h2 style={{ textAlign:'center' }}>DATA PHOTOS</h2>
        <table border="2">
          <tr class="white-text #d50000 red accent-4">
            <td>ALBUM ID</td>
            <td>ID</td>
            <td>TITLE</td>
            <td>URL</td>
            <td>THUMBNAIL URL</td>
          </tr>
          {data.map(todo =>
            <tr key={todo.id}>
              <td>{todo.albumId}</td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.url}</td>
              <td>{todo.thumbnailUrl}</td>
            </tr>
            )}
        </table>
        </Mui.Container>
      </div>
    );
  }
}

export default Photos;