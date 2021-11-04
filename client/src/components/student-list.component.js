import React, { Component } from "react";
import axios from 'axios';

export default class StudentList extends Component {
    state = {
        users: []
      }
    
    componentDidMount() {
        axios.get(`http://localhost:4000/students`)
          .then(res => {
            const users = res.data;
            this.setState({ users });
          })
      }
      render() {
        return (
          <ul>
            { this.state.users.map(user => <li>{user.name} | {user.email}</li>)}
          </ul>
        )
      }
}