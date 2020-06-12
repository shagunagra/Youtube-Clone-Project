import React, { Component } from 'react';
import './Comment.css';


//this is add comment js file in which takes all the inputs of the comment user wants to give.


class AddPerson extends Component{


    state = {
        name: null,
        comment: null,
    }

    
// function to take the id which each data will get

    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })
    }



    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addPerson(this.state);
    }


//function to cancel the given comment 
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
