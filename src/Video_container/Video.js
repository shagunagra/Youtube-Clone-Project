import React, {Component} from 'react';
import './Video.css';
import 'font-awesome/css/font-awesome.min.css';


class Videos extends Component{

    getRedHandler(){
        document.getElementById('heart').style.display='<i class="fa fa-heart" aria-hidden="true"></i>';
    }

    
    render(){
        return(
            <div>
                <div className="main_container">
                    <div className="video_show">
                        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                           frameBorder='0'
                           allow='autoplay; encrypted-media'
                           allowFullScreen
                           title='video'/>
                         <br/>
                        <span className="title" >Hello I am the title</span><br/>
                        <span className="channel_name">The Channel</span>
                        <span onClick={this.getRedHandler} id="heart"><i class="fa fa-heart-o" aria-hidden="true"></i></span>

                    </div>
                    <div className="video_list">
                    </div>
                </div>
            </div>
        )
    }
}

export default Videos;
