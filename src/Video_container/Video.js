import React, {Component} from 'react';
import './Video.css';
import 'font-awesome/css/font-awesome.min.css';
import Comment from '../Comment_section/Comment';
import Navigation from '../Navigation_panel/Navigation';

// the js file of the videos which opens when the search button is clicked.

class Videos extends Component{


    constructor() {
        super();
        this.state = {
           videoDetail: ' ',
           item_one: ' ',
           search_bool: 'false',
           videoid: '9LtH9CsbRe4',
           basicUrl: 'http://www.youtube.com/embed',
           get_tile: 'Aage rehne ki aadat | #RahoAmbitious with upGrad',
           get_channel: 'upGrad',
           success: "false"
        }
    }


    getRedHandler(){
        document.getElementById('heart').innerHTML="<i class='fa fa-heart' aria-hidden='true' id='redheart'></i>";
    }



    componentDidMount() {
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        let url= "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q=UpGrad&type=video&videoDefinition=high&key=AIzaSyDR4oBOsELhUm7dj-PZLsO7EnUfTPdpSU4";
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 200) {

                that.setState({videoDetail : JSON.parse(this.responseText).items});
                that.setState({search_bool: "true"});
                that.setState({success: "true"});
                that.setState({item_one:  JSON.parse(this.responseText).items[0]});
            }
        })
        xhr.open("GET",url,true);
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
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
                        {this.state.success === "true" && this.state.search_bool === "true" &&
                            <section>
                            {this.state.videoDetail.map((getData,i)=>(
                                <div key={i}>
                                    {i !== 0 &&
                                <div key={getData.id} style={{display: "flex", flexDirection: "row", marginTop: "40px"}}>
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
                        {this.state.success === "true" && this.state.search_bool === "false"&&
                        <h1 style={{textAlign: "center", marginTop: "25%"}}>No Videos Found</h1>}
                    </div>



                </div>
            </div>
        )
    }
}

export default Videos;
