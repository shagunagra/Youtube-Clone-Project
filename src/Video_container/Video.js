import React, {Component} from 'react';
import './Video.css';
import 'font-awesome/css/font-awesome.min.css';
import Comment from '../Comment_section/Comment';
import Navigation from '../Navigation_panel/Navigation';
import axios from "axios";


class Videos extends Component{

    constructor() {
        super();
        this.state = {
           videoDetail: [{}]
        }
    }


    getRedHandler(){
        document.getElementById('heart').innerHTML="<i class='fa fa-heart' aria-hidden='true' id='redheart'></i>";
    }

    componentWillMount() {
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        let url= "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q=UpGrad&type=video&videoDefinition=high&key=AIzaSyBdNT43hUJh2UbaJg47Rhifa8wWLxElbM8";
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 200) {

                console.log(JSON.parse(this.responseText));
                that.setState({videoDetail : JSON.parse(this.responseText).items[0]});
            }
        })
        xhr.open("GET",url,true);
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    }


    render(){
        return(
            <div>
                 <Navigation/>
                <div className="main_container">
                    <div className="video_show">
                        <iframe className="frame" src='http://www.youtube.com/embed/nqzIQh2D_Es'
                           frameBorder='0'
                           allow='autoplay; encrypted-media'
                           allowFullScreen
                           title='video'/>
                         <br/>
                        <span className="title" >{this.state.videoTitle}</span><br/>
                        <span className="channel_name">{this.state.channel_title}</span>
                        <span onClick={this.getRedHandler} id="heart"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                        <Comment/>
                    </div>


                    <div className="video_list">
                        {
                            <section>
                            {this.state.videoDetail.map((getData)=>(
                                <div key={getData.id} style={{display: "flex", flexDirection: "row", marginTop: "40px"}}>
                                    <img id={getData.id.videoId} src={getData.snippet.thumbnails.high.url} style={{height: "120px", width: "140px", marginLeft: "25px"}} />
                                    <section style={{position: "relative", top: "0px"}}>
                                        <p style={{position: "absolute", width: "242px"}}>
                                            <span style={{fontWeight: "bolder",marginLeft: "20px", position: "absolute"}}>{getData.snippet.title}<br/><span style={{color: "grey", fontWeight: "bold"}}>{getData.snippet.channelTitle}</span></span>
                                        </p>
                                        <br/><br/>
                                    </section>
                                </div>
                            ))}
                        </section>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Videos;
