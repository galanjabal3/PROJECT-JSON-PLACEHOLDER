import React, { Component} from 'react';
import * as Mui from '@material-ui/core';

class Users extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(apiUrl)
    .then((response) => response.json())
    .then(( data) => this.setState({data: data}));
  }

  render() {
    const { data } = this.state;

    return(
        <div>
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
          <h2 style={{ textAlign:'center' }}>DATA USERS</h2>
          <table border="2">
            <tr class="white-text #d50000 red accent-4">
            <td>ID</td>
            <td>NAME</td>
            <td>USERNAME</td>
            <td>EMAIL</td>
            <td colspan="6">ADDRESS</td>
            <td>PHONE</td>
            <td>WEBSITE</td>
            <td colspan="3">COMPANY</td>
            </tr>
            {data.map(todo =>
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.username}</td>
                <td>{todo.email}</td>
                <td>{todo.address.street}</td>
                <td>{todo.address.suite}</td>
                <td>{todo.address.city}</td>
                <td>{todo.address.zipcode}</td>
                <td>{todo.address.geo.lat}</td>
                <td>{todo.address.geo.lng}</td>
                <td>{todo.phone}</td>
                <td>{todo.website}</td>
                <td>{todo.company.name}</td>
                <td>{todo.company.catchPhrase}</td>
                <td>{todo.company.bs}</td>
              </tr>
              )}
          </table>
          </Mui.Container>
        </div>
    );
  }
} 

export default Users;