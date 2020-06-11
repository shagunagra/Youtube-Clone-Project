import React, { Component } from 'react';
import Display from './Display';
import AddPeople from './AddPeople';


class Comment extends Component{
  state = {
    people: [
      {
          id: 0,
          name: ' ',
         comment: ' '
      }
    ]
  }

  addPerson = (info) => {
    info.id = Math.floor(Math.random() * 100);

    let newInfo = [...this.state.people, info];

    this.setState({
      people: newInfo
    })
  } 

  componentDidMount(){
    console.log("I am Mounting right now. I happen only once!!")
  }

  componentDidUpdate(){
    console.log("I am updating right now. I happen everytime there is an update!!")
  }
  
  render(){
    return (
          <div className="App">
            <AddPeople addPerson={this.addPerson}></AddPeople>
            <Display people={this.state.people}></Display>
          </div>
        );
      }
    }

export default Comment;
