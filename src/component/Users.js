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
        <div align="center">
                     <Mui.Button variant="outlined" color="primary" href="/posts">Posts</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/albums">Albums</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/comments">Comments</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/photos">Photos</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/todos">Todos</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/users">Users</Mui.Button>
                     <h1 style={{ textAlign:'center' }}>DATA JSON PLACEHOLDER</h1><hr/>
         </div>
          <table BORDER="2">
            <tr>
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
        </div>
    );
  }
} 

export default Users;