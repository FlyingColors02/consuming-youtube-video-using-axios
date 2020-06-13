import React, { Component } from "react";
import Search from "./components/search"
import axios from "axios";
import List from "./components/list";
import Selected from "./components/selectedvideo.jsx";
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            inputData:"",
            dataVideo:[],
            selectedVideo:"",
        }
    }

    componentDidMount(){
        this.fetchData("bts");
    }

    fetchData=async (data)=>{
        console.log(data);
        this.setState({inputData:data});
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search`,
            {params:{
                part:"snippet",
                maxResults:10,
                q:data,
                key:"AIzaSyCF7C2NIaGwt60aFSTO50LAyvcniJi8Gpw"
            }
        });
        console.log(response.data.items)
        this.setState({dataVideo:response.data.items})
        this.setState({selectedVideo:response.data.items[0]});
    }

    SelectedVideoListItem=(item)=>{
        console.log(item);
        this.setState({selectedVideo: item})
       }

    render(){
       
        return(
            <div className="abcd" style={{marginLeft:"50px"}}>
                <div className="row">
                    <div className="col-md-8">
                        <Search IData={this.fetchData}/>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <Selected videoPlayer={this.state.selectedVideo}/>
                  </div>
                  <div className="col-md-4">
                    <List show={this.state.dataVideo} VPlay={this.SelectedVideoListItem}/>
                  </div>
              </div>
              </div>
        )
    }
}
export default App;