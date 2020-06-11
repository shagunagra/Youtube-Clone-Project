import React, {Component} from 'react';
import './Navigation.css';
import ReactDOM from 'react-dom';
import Videos from '../Video_container/Video';


class Navigation extends Component{

    gotHandler = (e) =>{
        ReactDOM.render(<Videos/>,document.getElementById('root'));
    }
    render(){
        return(
            <div>
        
                    <input id="search" type="text" className="search_content" placeholder="Search"/>
                    <button onClick={this.gotHandler} className="search_button" id="button">Search</button>
                    <hr className="line"/>
            </div>
        )
    }
}

export default Navigation;
