import React, {Component} from 'react';
import './Comment.css';

class Comment extends Component{
    render(){
        return(
            <div>
                <div className="comment_content">
                    <p className="comment_section">Comments</p>
                    <form className="form">
                        <div className="input_content">
                            <div>
                                <input type="text" className="your_name" placeholder="Your Name" id="name"/>
                            </div>
                            <div>
                                <input type="text" className="your_comment" placeholder="Your Comment" id="comment"/>
                            </div>
                        </div>
                    </form>
                    <button className="comment_btn" id="comment">Comment</button>
                    <button className="cancel_btn" id="cancel">Cancel</button>
                </div>
            </div>
        )
    }
}

export default Comment;
