import React, {Component} from 'react';
import '../Video_container/Video.css';
import 'font-awesome/css/font-awesome.min.css';
import data1 from '../VideoData.json';
import Comment from '../Comment_section/Comment';
import Navigation from '../Navigation_panel/Navigation';

const data = data1.items;
const tile = data1.items[0];



class Home extends Component{

    constructor() {
        super();
        this.state = {
            video: {},
            videoid: 'nqzIQh2D_Es',
            basicUrl: 'http://www.youtube.com/embed',
            title: 'Trending Nakhra (Full Video) | Amrit Maan ft. Ginni Kapoor | Intense || Latest Songs 2018'
        }
    }

    getRedHandler(){
        document.getElementById('heart').innerHTML="<i class='fa fa-heart' aria-hidden='true' id='redheart'></i>";
    }

    videoClickHandler =(id,titles)=>{
        console.log(titles);
        console.log(id);
        this.setState({videoId: id});
        this.setState({title: titles});
    }

    render(){
        return(
            <div>
                <Navigation/>
                <div className="main_container">
                    <div className="video_show">
                        <iframe className="frame" src={this.state.basicUrl + "/" + this.state.videoid}
                           frameBorder='0'
                           allow='autoplay; encrypted-media'
                           allowFullScreen
                           title='video'/>
                         <br/>
                            <span className="title" >{tile.snippet.title}</span><br/>
                            <span className="channel_name">{tile.snippet.channelTitle}</span>
                
                        <span onClick={this.getRedHandler} id="heart"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                        <Comment/>
                    </div>


                    <div className="video_list">
                        {
                            <section>
                                {data.map((getData)=>(
                                    <div    style={{display: "flex", flexDirection: "row", marginTop: "40px"}}>
                                        <img id={getData.id.videoId} src={getData.snippet.thumbnails.high.url} style={{height: "120px", width: "140px", marginLeft: "25px"}} onClick={this.videoClickHandler.bind(this, getData.id.videoId,getData.snippet.title)}/>
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

export default Home;
