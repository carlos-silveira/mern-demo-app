import React, { Component } from "react";
import axios from 'axios';

export default class StudentList extends Component {
    state = {
        users: []
      }

    componentDidMount() {
        const PORT = process.env.PORT || 4000;
        axios.get(`http://localhost:${PORT}/students`)
          .then(res => {
            const users = res.data;
            this.setState({ users });
          })
          .catch(function (error) {
            // handle error
            console.log(error);
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