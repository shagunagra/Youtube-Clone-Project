import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Comment.css';

class Comment extends Component{


    constructor(){
        super();
        this.state={
            id: 0,
            name: '',
            comment: '',
            show:false
        }
    }

    inputChangedHandler = (e) =>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);

    }

    handleClick = () => {
        ReactDOM.findDOMNode(this.refs.form1).value = "";
        ReactDOM.findDOMNode(this.refs.form2).value = "";
      }

    render(){
        const {name,comment}=this.state;
        return(
            <div>


                <div className="comment_content">
                    <p className="comment_section">Comments</p>
                    <form className="form">
                        <div className="input_content">
                            <div>
                                <input type="text" ref="form1" className="your_name" placeholder="Your Name" id="name" name="name" onChange={this.inputChangedHandler}/>
                            </div>
                            <div>
                                <input type="text" ref="form2" className="your_comment" placeholder="Your Comment" id="comment" name="comment" onChange={this.inputChangedHandler}/>
                            </div>
                        </div>
                    </form>
                    <button className="comment_btn" id="comment" onClick={()=>{this.setState({show:!this.state.show})}}>Comment</button>
                    <button className="cancel_btn" id="cancel" onClick={this.handleClick}>Cancel</button>
                </div>
                {
                    this.state.show? <div id="comment_form">
                        <span className="icon"><i class="fa fa-user" aria-hidden="true"></i></span>
                        <span className="get_name"> {name} </span><br/>
                        <span className="get_comment"> {comment} </span>
                    </div>: null
                }
            </div>
        )
    }
}

export default Comment;
