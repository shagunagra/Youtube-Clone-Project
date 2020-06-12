import React, {Component} from 'react';
import '../Video_container/Video.css';
import 'font-awesome/css/font-awesome.min.css';
import data1 from '../VideoData.json';
import Comment from '../Comment_section/Comment';
import Navigation from '../Navigation_panel/Navigation';

//the main home js file when the site is opened this home page is visible.

const data = data1.items;



class Home extends Component{


    constructor() {
        super();
        this.state = {
            video: {},
            videoid: 'IBvg3WeqP1U',
            basicUrl: 'http://www.youtube.com/embed',
            get_tile: 'Bole Chudiyan Full Video - K3G|Amitabh, Shah Rukh, Kajol, Kareena, Hrithik|Udit Narayan',
            get_channel: 'SonyMusicIndiaVEVO',
        }
    }



    getRedHandler(){
        document.getElementById('heart').innerHTML="<i class='fa fa-heart' aria-hidden='true' id='redheart'></i>";
    }



    videoClickHandler =(id,titles,cha)=>{
        this.setState({videoid: id});
        this.setState({get_tile: titles});
        this.setState({get_channel: cha});
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
                            <span className="title" >{this.state.get_tile}</span><br/>
                            <span className="channel_name">{this.state.get_channel}</span>
                
                        <span onClick={this.getRedHandler} id="heart"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                        <Comment/>
                    </div>


                    <div className="video_list">
                        {
                            <section>
                                {data.map((getData,i)=>(
                                    <div key={i}>
                                        {i !== 0 &&
                                    <div style={{display: "flex", flexDirection: "row", marginTop: "40px"}}>
                                        <img id={getData.id.videoId} src={getData.snippet.thumbnails.high.url} alt="anyname" style={{height: "120px", width: "140px", marginLeft: "25px", cursor: "pointer"}} onClick={this.videoClickHandler.bind(this, getData.id.videoId,getData.snippet.title,getData.snippet.channelTitle)}/>
                                        <section style={{position: "relative", top: "0px"}}>
                                            <p style={{position: "absolute", width: "242px"}}>
                                                <span style={{fontWeight: "bolder",marginLeft: "20px", position: "absolute"}}>{getData.snippet.title}<br/><span style={{color: "grey", fontWeight: "bold"}}>{getData.snippet.channelTitle}</span></span>
                                            </p>
                                            <br/><br/>
                                        </section>
                                    </div>
                                    }
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
