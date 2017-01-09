class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: window.exampleVideoData,
      video: window.exampleVideoData[0]
    };

  }

  componentDidMount() {
    this.getVideos('cute kittens');
  }

  getVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        video: videos[0]
      });
    });
  }

  setSomething(videoObj) {
    this.setState({
      video: videoObj
    });
  }

  render () {
    return (
      <div>
        <Nav getVideos={this.getVideos.bind(this)}/>
        <div className="col-md-7">
        <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
        <VideoList videos={this.state.videos} setSomething={this.setSomething.bind(this)}/>
        </div>
      </div>
    );
  }
}




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
