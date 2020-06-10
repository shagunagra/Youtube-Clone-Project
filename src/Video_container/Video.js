import React, {Component} from 'react';
import './Video.css';
import 'font-awesome/css/font-awesome.min.css';


class Videos extends Component{

    constructor() {
        super();
        this.state = {
           videoDetail: [{}],
           videoTitle: [],
           channel_title: []
        }
    }


    getRedHandler(){
        document.getElementById('heart').innerHTML="<i class='fa fa-heart' aria-hidden='true' id='redheart'></i>";
    }

    componentWillMount() {
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        let url= "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q=trending&type=video&videoDefinition=high&key=AIzaSyBdNT43hUJh2UbaJg47Rhifa8wWLxElbM8";

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 200) {

                that.setState({videoDetail : JSON.parse(this.responseText).items[0],
                    videoTitle: JSON.parse(this.responseText).items[0].snippet.title,
                    channel_title: JSON.parse(this.responseText).items[0].snippet.channelTitle })
                    //console.log(that.state.videoTitle);
                var a= JSON.parse(this.responseText).items;
                let arr =[]; 
                for(var i=0;i<a.length;i++)
                {
                    arr.push(a[i].snippet.title);
                }
                console.log(arr);

            }
        })
        xhr.open("GET",url,true);
        xhr.send(data);
    }


    

    render(){
        return(
            <div>
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
                    </div>


                    <div className="video_list">
                        {
                            this.state.sucess === "true" && this.state.searchpress === "true" &&
                            <section>
                                {this.state.videoDetail.map((getData)=>(
                                    <div>
                                        <section>
                                            <p>
                                                <span>{getData.snippet.title}<span>{getData.snippet.channelTitle}</span></span>
                                            </p>
                                            <br/><br/>
                                        </section>
                                        <img id={getData.id.videoId} src={getData.snippet.thumbnails.high.url}/>
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
