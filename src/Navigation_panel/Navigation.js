import React, {Component} from 'react';
import './Navigation.css';

class Navigation extends Component{
    render(){
        return(
            <div>
                <input id="search" type="text" className="search_content" defaultValue="Search"/>
                <button className="search_button" id="button">Search</button>
                <hr className="line"/>
            </div>
        )
    }
}

export default Navigation;
