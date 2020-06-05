import React, {Component} from 'react';
import './Navigation.css';

class Navigation extends Component{

    constructor(){
        super();
        this.state ={
            videoname: ''
        }
    }

    getVideoHandler = event => {
        this.setState({videoname: event.target.value});
    }
    render(){
        return(
            <div>
                <input id="search" type="text" className="search_content" defaultValue="Search" onChange={this.getVideoHandler}/>
                <button className="search_button" id="button">Search</button>
                <hr className="line"/>
            </div>
        )
    }
}

export default Navigation;
