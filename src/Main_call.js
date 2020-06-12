import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Home from './Home/Home';

//this is the main js file which calls the home page.


class Main extends Component{

    render(){
        return(
            <div>
               <Home/>
            </div>
        )
    }
}

export default Main;
