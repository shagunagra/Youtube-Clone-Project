import React, {Component} from 'react';
import './Video.css';
import 'font-awesome/css/font-awesome.min.css';


class Videos extends Component{

    constructor() {
        super();
        this.state = {
           videoDetail: []
        }
    }

    getRedHandler(){
        document.getElementById('heart').innerHTML="<i class='fa fa-heart' aria-hidden='true' id='redheart'></i>";
    }

    componentWillMount() {
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({
                    upcomingMovies: JSON.parse(this.responseText).items
                });
            }
        });
        xhr.open("GET", "http://3.227.145.17:8085/api/v1/movies?page=1&limit=10");
        xhr.setRequestHeader("Cache-Control","no-cache");
        xhr.send(data);
    }
    render(){
        return(
            <div>
                <div className="main_container">
                    <div className="video_show">
                        <iframe className="frame" src='http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
                           frameBorder='0'
                           allow='autoplay; encrypted-media'
                           allowFullScreen
                           title='video'/>
                         <br/>
                        <span className="title" >Hello I am the title</span><br/>
                        <span className="channel_name">The Channel</span>
                        <span onClick={this.getRedHandler} id="heart"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                    </div>

                    <div className="video_list">
                        <div className="section_show">
                            <iframe className="small_videos" src='http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'/>
                                <div className="break">
                                    <span className="side_title" >Hello </span>
                                    <span className="side_channel">The</span>
                                </div>
    
                        </div>

                        <div className="section_show">
                            <iframe className="small_videos" src='http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'/>
                             <div className="break">
                                    <span className="side_title" >Hello </span>
                                    <span className="side_channel">The</span>
                             </div>
                        </div>

                        <div className="section_show">
                            <iframe className="small_videos" src='http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'/>
                                 <div className="break">
                                    <span className="side_title" >Hello </span>
                                    <span className="side_channel">The</span>
                                </div>
                        </div>

                        <div className="section_show">
                            <iframe className="small_videos" src='http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'/>
                                 <div className="break">
                                    <span className="side_title" >Hello </span>
                                    <span className="side_channel">The</span>
                                </div>
                        </div>

                        <div className="section_show">
                            <iframe className="small_videos" src='http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'/>
                                 <div className="break">
                                    <span className="side_title" >Hello </span>
                                    <span className="side_channel">The</span>
                                </div>
                        </div>

                    </div>



                </div>
            </div>
        )
    }
}

export default Videos;
