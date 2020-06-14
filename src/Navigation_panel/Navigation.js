import React, {Component} from 'react';
import './Navigation.css';
import ReactDOM from 'react-dom';
import Videos from '../Video_container/Video';


//the navigation bar js file.

class Navigation extends Component{

    constructor(){
        super();
        this.state ={
            video_name: " "
        }
    }

    videoHandler =(e) =>{
        this.setState({video: e.target.value});
    }
    
    gotHandler = (e) =>{
        ReactDOM.render(<Videos  video={this.state.video}/>,document.getElementById('root'));
    }


    render(){
        return(

            <div>
                    <input id="search" type="text" className="search_content" placeholder="Search" onChange={this.videoHandler}/>
                    <button onClick={this.gotHandler} className="search_button" id="button">Search</button>
                    <hr className="line"/>
            </div>
        )
    }
}

export default Navigation;
