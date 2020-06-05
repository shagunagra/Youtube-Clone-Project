import React, {Component} from 'react';
import Navigation from './Navigation_panel/Navigation';
import Comment from './Comment_section/Comment';
import Videos from './Video_container/Video';
import 'font-awesome/css/font-awesome.min.css';

class Main extends Component{
    render(){
        return(
            <div>
                <Navigation/>
                <Videos/>
                <Comment/>
            </div>
        )
    }
}

export default Main;
