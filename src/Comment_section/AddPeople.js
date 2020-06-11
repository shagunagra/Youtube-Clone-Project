import React, { Component } from 'react';
import './Comment.css';

class AddPerson extends Component{
    state = {
        name: null,
        comment: null
    }

    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addPerson(this.state);

    }

    handleClick = () => {
        document.getElementById('name').value = " ";
        document.getElementById('comment').value = " ";
      }

    render(){
        return(
            <div className="comment_content">
                <p className="comment_section">Comments</p>
                <form className="form">
                        <div className="input_content">
                            <div>
                               <input type="text" className="your_name" placeholder="Your Name" id="name" name="name"  onChange={this.handleChange}/> 
                            </div>
                            <div>
                                <input type="text" className="your_comment" placeholder="Your Comment" id="comment" name="comment" onChange={this.handleChange}/>
                            </div>
                        </div>
                </form>
                <button className="comment_btn" id="comment" onClick={this.handleSubmit}>Comment</button>
                <button className="cancel_btn" id="cancel" onClick={this.handleClick}>Cancel</button>
            </div>
        )
    }
}

export default AddPerson;
