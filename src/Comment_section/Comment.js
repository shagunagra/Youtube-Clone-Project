import React, { Component } from 'react';
import Display from './Display';
import AddPeople from './AddPeople';


class Comment extends Component{
  state = {
    people: [
      {
          id: 0,
          name: ' ',
         comment: ' ',
         set_bool: 'false'
      }
    ]
  }

  addPerson = (info) => {
    info.id = Math.floor(Math.random() * 100);

    let newInfo = [...this.state.people, info];

    this.setState({
      people: newInfo
    })
    this.setState({set_bool: "true"});
  } 
  
  render(){
    return (
          <div className="App">
            <AddPeople addPerson={this.addPerson}></AddPeople>
            <Display people={this.state.people} set_bool={this.state.set_bool}></Display>
          </div>
        );
      }
    }

export default Comment;
